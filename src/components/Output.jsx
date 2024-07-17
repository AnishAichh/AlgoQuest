import { Box, Button, Text, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestionStatus, selectQuestionById } from '../features/questionSlice';
import { useState } from 'react';
import { CODE_SNIPPETS } from '../constants/data';
import { excuteCode } from './api';

function Output({ editorRef, language, questionId }) {

    const toast = useToast();
    const dispatch = useDispatch();
    const question = useSelector((state) => selectQuestionById(state, questionId));
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const runCode = async () => {
        const sourceCode = editorRef.current.getValue();
        if (!sourceCode) return;
        try {
            setIsLoading(true);
            const { run: result } = await excuteCode(language, sourceCode);
            const codeOutput = result.output;
            setOutput(codeOutput);
            if (result.stderr) {
                setIsError(true);
                dispatch(updateQuestionStatus({ questionId, status: 'unsolved' }));
            } else {
                setIsError(false);
                const isCorrect = verifyOutput(questionId, codeOutput);
                dispatch(updateQuestionStatus({ questionId, status: isCorrect ? 'solved' : 'unsolved' }));
                if (isCorrect) {
                    toast({
                        title: "Success",
                        description: "Your code executed correctly.",
                        status: "success",
                        duration: 1000
                    });
                } else {
                    toast({
                        title: "Incorrect Output",
                        description: "The output is not as expected.",
                        status: "warning",
                        duration: 1000
                    });
                }
            }
        } catch (error) {
            console.log('error', error);
            toast({
                title: "An error has occurred",
                description: error.message || "Unable to run code",
                status: "error",
                duration: 1000
            });
        } finally {
            setIsLoading(false);
        }
    };

    const verifyOutput = (questionId, output) => {
        const expectedOutput = CODE_SNIPPETS[questionId][language]?.output || '';
        try {
            const parsedOutput = JSON.parse(output);
            const parsedExpectedOutput = JSON.parse(expectedOutput);
            return JSON.stringify(parsedOutput) === JSON.stringify(parsedExpectedOutput);
        } catch (e) {
            // If parsing fails, fall back to string comparison
            return output.trim() === expectedOutput.trim();
        }
    };

    return (
        <Box w='50%'>
            <Text mb={4} fontSize='lg'> Output </Text>
            <Button
                variant='outline'
                colorScheme='green'
                mb={4}
                onClick={runCode}
                isLoading={isLoading}
            >
                Run code
            </Button>
            <Box
                height='75vh'
                p={2}
                border='1px solid'
                color={isError ? "red.400" : "white"}
                borderRadius={4}
                borderColor={isError ? "red.500" : "#333"}
            >
                {
                    output ? output : "Click 'Run Code' to see the output here"
                }
            </Box>
        </Box>
    );
}

export default Output;
