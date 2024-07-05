import { Box, Button, Text, useToast } from '@chakra-ui/react'
import { excuteCode } from './api';
import { languages } from 'monaco-editor';
import { useState } from 'react';
function Output({ editorRef, language }) {
    const toast = useToast();
    const [output, setOutput] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setIsLoading(true);
            const { run: result } = await excuteCode(language, sourceCode)
            setOutput(result.output)
            result.stderr ? setIsError(true) : setIsError(false);

        } catch (error) {
            console.log('error');
            toast({
                title: "An error has occured",
                description: error.message() || "unable to run code",
                status: "error",
                duration: 1000
            })
        } finally {
            setIsLoading(false);
        }

    }
    return (
        <Box w='50%'>
            <Text mb={4} fontSize='lg'> Output </Text>
            <Button
                variant='outline'
                colorScheme='"green'
                mb={4}
                onClick={runCode}
                isLoading={isloading}
            >
                Run code
            </Button>
            <Box
                height='75vh'
                p={2}
                border='1px solid'
                color={
                    isError ? "red.400" : ""
                }
                borderRadius={4}
                borderColor={
                    isError ? "red.500" : "#333"
                }
            >
                {
                    output ? output : "Click 'Run Code' to see the output here"
                }
            </Box>
        </Box>
    )
}

export default Output
