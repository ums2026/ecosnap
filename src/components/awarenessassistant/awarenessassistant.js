import { useState } from "react";
import "./AwarenessAssistant.css";
import { Configuration, OpenAIApi } from "openai";
import { ChakraProvider, Box, Textarea, Button, Image, theme } from "@chakra-ui/react";
import { Spinner } from "react-bootstrap";


function AwarenessAssistant() {

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY
    });
  const [prompt, setPrompt] = useState("");
  const openai = new OpenAIApi(configuration);

  const [result, setResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const generateImage = async () => {
    setIsLoading(true)

      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
      });
  
      setResult(res.data.data[0].url);
      setIsLoading(false)
    };
  
return(

<ChakraProvider theme={theme}>
<Box
  bgImage="url('https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXZlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60')"
  bgSize="cover"
  minHeight="100vh"
  display="flex"
  flexDirection="column"
  alignItems="center"
  justifyContent="center"
  padding="2rem"
>
  <Box
    backdropFilter="blur(10px)"
    background="rgba(255, 255, 255, 0.5)"
    padding="2rem"
    borderRadius="8px"
    textAlign="center"
  >
  
  

    {/* Form */}

    <Box mt="3" height="200px">
    <h2>Generate environmental-related images</h2>
        <form>
        <input
          type="text"
          value={prompt}
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "4px",
            padding: "0.5rem",
            marginTop: "1rem",
            width: "100%",
          }}
          placeholder="Enter a prompt"
          onChange={(e) => setPrompt(e.target.value)}
          
        />
        <Button
          bg="green"
          color="white"
          borderRadius="4px"
          padding="0.5rem"
          mt="1rem"
          width="100%"
          onClick={generateImage}

        >
          Generate Image
        </Button>
      </form>
    </Box>

    {/* Spinner or response */}
    <Box mt="3">
      {isLoading ? (
          <Spinner />
        ) : result ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <></>
        )}
      
      </Box>
  </Box>
</Box>
</ChakraProvider>

  );

}

export default AwarenessAssistant;