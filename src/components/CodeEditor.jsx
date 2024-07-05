import { Box, HStack } from "@chakra-ui/react";
import { Editor } from '@monaco-editor/react';
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants/data";
import Output from "./Output";
const CodeEditor = ({ questionId }) => {

    const editorRef = useRef(null);
    const [value, setValue] = useState("")
    const [language, setLanguage] = useState('javascript')

    useEffect(() => {
        const questionCode = CODE_SNIPPETS[questionId] ? CODE_SNIPPETS[questionId][language] : '';
        setValue(questionCode || ' ');
    }, [questionId, language]);

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };


    const onSelect = (language) => {
        setLanguage(language);
        const questionCode = CODE_SNIPPETS[questionId] ? CODE_SNIPPETS[questionId][language] : '';
        setValue(questionCode || '');
    };
    return (
        <Box>
            <HStack className="space-x-4">
                <Box className="w-1/2">
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor
                        theme="vs-dark"
                        height="75vh"
                        language={language}
                        onMount={
                            onMount
                        }
                        //In React, the onMount function in the Monaco Editor is used to handle events emitted by the editor and interact with it programmatically. For example, you can use the onMount function to invoke instance methods or log information about the Monaco instance:
                        // Handle events
                        // You can use the onMount function to handle events emitted by the editor, such as when content changes.
                        // Interact programmatically
                        // You can use the onMount function to invoke instance methods to interact with the editor programmatically. For example, you can use the onMount function to create a binding.
                        // Log information
                        // You can use the onMount function to log information about the Monaco instance. For example, you can use the onMount function to log the Monaco instance before mounting. 
                        value={value}
                        onChange={(value) => setValue(value)}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} />
            </HStack>

        </Box>
    )
}
export default CodeEditor;