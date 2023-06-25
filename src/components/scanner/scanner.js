import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  Text,
} from "@chakra-ui/react";
import Webcam from "react-webcam";
import * as cvstfjs from "@microsoft/customvision-tfjs";
import Navbar from "components/layout/Navbar";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: {
          bg: "teal.500",
          color: "white",
        },
      },
    },
  },
});

function Scanner() {
  const classLabels = {
    0: "Compostable",
    1: "Recyclable",
    2: "SpecialDropOff",
    // Add more class labels/tags as needed
  };

  const webcamRef = useRef(null);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);

  async function predictionFunction() {
    setVideoHeight(webcamRef.current.video.videoHeight);
    setVideoWidth(webcamRef.current.video.videoWidth);

    let model = new cvstfjs.ObjectDetectionModel();
    await model.loadModelAsync(process.env.REACT_APP_PUBLIC_URL + "/model.json");


    const predictions = await model.executeAsync(
      document.getElementById("img")
    );

    var cnvs = document.getElementById("myCanvas");
    cnvs.style.position = "absolute";

    var ctx = cnvs.getContext("2d");
    ctx.clearRect(0, 0, cnvs.width, cnvs.height);

    if (predictions[0].length > 0) {
      for (let n = 0; n < predictions[0].length; n++) {
        if (predictions[1][n] > 0.4) {
          const predictedClassIndex = predictions[2][n];
          const predictedClassLabel = classLabels[predictedClassIndex];

          let bboxLeft =
            predictions[0][n][0] * webcamRef.current.video.videoWidth;
          let bboxTop =
            predictions[0][n][1] * webcamRef.current.video.videoHeight;
          let bboxWidth =
            predictions[0][n][2] * webcamRef.current.video.videoWidth - bboxLeft;
          let bboxHeight =
            predictions[0][n][3] * webcamRef.current.video.videoHeight - bboxTop;

          ctx.beginPath();
          ctx.font = "16px Arial";
          ctx.fillStyle = "red";
          ctx.fillText(predictedClassLabel, bboxLeft, bboxTop + 20);

          ctx.rect(bboxLeft, bboxTop, bboxWidth, bboxHeight);
          ctx.strokeStyle = "#FF0000";
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }
      setTimeout(() => predictionFunction(), 500);
    }
  }

  const videoConstraints = {
    height: 350,
    width: 500,
    facingMode: "environment",
  };

  useEffect(() => {
    predictionFunction();
  }, []);

  return (
    <>
    <Navbar />

    <ChakraProvider theme={theme}>
      <Box
        bgImage="url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXZlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60')"
        bgSize="auto"
        minHeight="100vh"
        minWidth="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          backdropFilter="blur(10px)"
          background="rgba(255, 255, 255, 0.5)"
          padding="2rem"
          borderRadius="8px"
          textAlign="center"
        >
          <Text
            as="h1"
            fontSize="3xl"
            fontWeight="bold"
            color="white"
            marginBottom="2rem"
          >
            EcoSnap Trash Sorting
          </Text>
          <Box
            position="relative"
            width={videoConstraints.width}
            height={videoConstraints.height}
            borderRadius="8px"
            overflow="hidden"
            boxShadow="rgba(0, 0, 0, 0.25) 0px 10px 20px, rgba(0, 0, 0, 0.25) 0px 3px 6px"
          >
            <Webcam
              audio={false}
              id="img"
              ref={webcamRef}
              screenshotQuality={1}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <canvas
              id="myCanvas"
              width={videoWidth}
              height={videoHeight}
              style={{ backgroundColor: "transparent" }}
            />
          </Box>
          <Button
            variant="solid"
            maxWidth="250px"
            marginTop="2rem"
            onClick={() => {
              predictionFunction();
            }}
          >
            Start Detect
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
    </>
  );
}

export default Scanner;
