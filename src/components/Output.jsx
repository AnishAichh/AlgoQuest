import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { executeCode } from './api';

const Output = ({ editorRef, language }) => {
    const Toast = useToast()
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        console.log("working1")
        if (!sourceCode) return;
        try {
            setIsLoading(true);
            const { run: result } = await executeCode(language, sourceCode);
            setOutput(result.output.split("\n"));
            console.log("working")
            result.strerr ? setIsError(true) : setIsError(false)
        } catch (error) {
            console.log("error")
            console.log(error);
            Toast({
                title: "An error occured.",
                description: error.message || "Unable to run code",
                status: "error",
                duration: 6000
            })
        }
        finally {
            setIsLoading(false);
        }

    }

    return (

        <Box className='w-1/2'>
            <Text className="text-lg"> Output</Text>
            <Button variant="outline" colorScheme='green' className='' isLoading={isLoading} onClick={runCode}>
                Run
            </Button>
            <Box
                className='border border-solid border-gray-500 rounded'
                height="75vh">
                {output ? 
                output.map((line,i) => 
                    <Text key={i}>{line} </Text>
                )
                : "Click 'Run' to see the output here.."}
            </Box>
        </Box>
    )
}

export default Output
