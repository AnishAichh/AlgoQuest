import { Box, VStack, Button, Collapse, IconButton, Text } from "@chakra-ui/react";
import { Editor } from '@monaco-editor/react';
import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS, QUESTION_DESCRIPTIONS } from "../constants/data";
import Output from "./Output";
import { useNavigate } from 'react-router-dom';

const CodeEditor = ({ questionId }) => {
    const editorRef = useRef(null);
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState('javascript');
    const [description, setDescription] = useState("");
    const [isOutputVisible, setIsOutputVisible] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const questionCode = CODE_SNIPPETS[questionId] ? CODE_SNIPPETS[questionId][language].code : '';
        setValue(questionCode || ' ');
        const questionDescription = QUESTION_DESCRIPTIONS[questionId] || 'No description available.';
        setDescription(questionDescription);
    }, [questionId, language]);

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        const questionCode = CODE_SNIPPETS[questionId] ? CODE_SNIPPETS[questionId][language].code : '';
        setValue(questionCode || '');
    };

    const toggleOutput = () => {
        setIsOutputVisible(prev => !prev);
    };

    const handleBackToProblems = () => {
        navigate('/question-list'); // Adjust this path to your question list route
    };

    return (
        <Box display="flex" height="100vh">
            {/* Left part: scrollable question description */}
            <Box flex="1" overflowY="scroll" padding="4" borderRight="1px solid #ddd">
                <VStack align="start" spacing="4">
                    <Box>
                        <h2>Question Description</h2>
                        <p>{description}</p>
                    </Box>
                </VStack>
            </Box>
            
            {/* Right part: static code editor and output */}
            <Box flex="2" display="flex" flexDirection="column" padding="4" overflow="hidden">
                <Box flex="1" marginBottom="4">
                    <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color="blue.500"
                        cursor="pointer"
                        onClick={handleBackToProblems}
                        _hover={{ color: "orange.500" }} // Hover effect
                        marginBottom="4"
                    >
                        Back to problems
                    </Text>
                    <LanguageSelector language={language} onSelect={onSelect} />
                    
                    <Editor
                        theme="vs-dark"
                        height="60vh"  // Adjusted height for the editor
                        language={language}
                        value={value}
                        onMount={onMount}
                        onChange={(value) => setValue(value)}
                    />
                    <div style={{gap: "50px", display: "flex", width: "100%"}}>
                    <div>
                    <Button 
                        onClick={toggleOutput} 
                        colorScheme="blue" 
                        rightIcon={isOutputVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        marginTop="4"
                    >
                        Output
                    </Button>
                    </div>
                    <div style={{marginLeft: "850px"}}>
                    <Button 
                        onClick={toggleOutput} 
                        colorScheme="blue" 
                        marginTop="4"
                    >
                        Submit
                    </Button>
                    </div>
                    </div>
                    
                    
                </Box>
                <Collapse in={isOutputVisible}>
                    <Box border="1px solid #ddd" borderRadius="md" padding="4" height="20vh" overflow="auto">
                        <Output editorRef={editorRef} language={language} questionId={questionId} />
                    </Box>
                </Collapse>
            </Box>
        </Box>
    );
};

export default CodeEditor;
