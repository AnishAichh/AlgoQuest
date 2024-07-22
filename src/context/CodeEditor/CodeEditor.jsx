import { Box, HStack } from "@chakra-ui/react";
import { Editor } from '@monaco-editor/react';
import { useEffect, useRef, useState } from "react";
import LanguageSelector from "../LanguageSelector";
import { CODE_SNIPPETS } from "../../utils";
import Output from "../Output/Output";

const CodeEditor = ({ questionId }) => {
    const editorRef = useRef(null);
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState('javascript');

    useEffect(() => {
        const questionCode = CODE_SNIPPETS[questionId] ? CODE_SNIPPETS[questionId][language].code : '';
        setValue(questionCode || ' ');
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

    return (
        <Box>
            <HStack className="space-x-4">
                <Box className="w-1/2">
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor
                        theme="vs-dark"
                        height="75vh"
                        language={language}
                        value={value}
                        onMount={onMount}
                        onChange={(value) => setValue(value)}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} questionId={questionId} />
            </HStack>
        </Box>
    )
}

export default CodeEditor;
