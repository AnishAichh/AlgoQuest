import { Box, HStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Editor } from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import Output from './Output';

export const CodeEditor = () => {

    const editorRef = useRef();
    const [value, setValue] = useState('');
    const [language, setLanguage] = useState("javascript");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
    }

    return (
        <Box>
            <HStack className=''>
                <Box className='w-1/2'>
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor
                        className=''
                        height="75vh"
                        theme='vs-dark'
                        language={language}
                        defaultValue={CODE_SNIPPETS[language]}
                        value={value}
                        onMount={onMount}
                        onChange={
                            (value) => setValue(value)}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} />
            </HStack>

        </Box>
    )
}

