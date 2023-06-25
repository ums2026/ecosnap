import { Container, Divider,Button, Center } from '@chakra-ui/react';
import {Configuration} from 'openai';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Spinner} from 'react-bootstrap';
import { ChakraProvider, Box, theme, Text, Webcam } from '@chakra-ui/react';

const PARAMS = {
  temperature: 0.5,
  max_tokens: 100
}
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY
})



function Chatbot(){
  const [cbResponse, setCbResponse] = useState('')
  const [userInput, setUserInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getInstructions = (input) => {
    let prompt = input
    return prompt;
  }

  const handleSendData = async(e) => {
    e.preventDefault()
    setIsLoading(true)

    const prompt = getInstructions(userInput)
    const endpoint = "https://api.openai.com/v1/engines/text-ada-001/completions";

    const body = {...PARAMS, prompt}
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${configuration.apiKey}`
      },
      body: JSON.stringify(body)
    })

    const data = await response.json()
    console.log()
    setCbResponse(data.choices[0].text)
    setIsLoading(false)
  }

  return (

    // ...
    
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
            <h1>EcoBot</h1>
            <form onSubmit={handleSendData}>
              <input
                type="text"
                value={userInput}
                placeholder='Enter a question here'
                onChange={(e) => setUserInput(e.target.value)}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderRadius: "4px",
                  padding: "0.5rem",
                  marginTop: "1rem",
                  width: "100%",
                }}
              />
              <Button
                type="submit"
                bg="green"
                color="white"
                borderRadius="4px"
                padding="0.5rem"
                mt="1rem"
                width="100%"
              >
                Submit
              </Button>
            </form>
          </Box>
    
          {/* Spinner or response */}
          <Box mt="3" fontSize="20px" fontWeight="bold">
            {isLoading ? <Spinner /> : cbResponse}
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
    

    
  )
}

export default Chatbot;
