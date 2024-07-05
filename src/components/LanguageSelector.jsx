import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { LANGUAGE_VERSIONS } from '../constants/data';

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
    return (
        <Box className='mb-2 text-2xl'>
            <Menu>
                <MenuButton as={Button} className='text-blue-700'>
                    {language}
                </MenuButton>
                <MenuList>
                    {
                        languages.map(([language, version]) => (
                            <MenuItem key={language} onClick={() => onSelect(language)}>
                                {language}
                                &nbsp;
                                <span className='color-gray-500 text-lg'>{version}</span>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </Box>
    );
}

export default LanguageSelector;
