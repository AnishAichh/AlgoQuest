import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { LANGUAGE_VERSIONS } from '../constants'

const LanguageSelector = ({language, onSelect}) => {

    const languages = Object.entries(LANGUAGE_VERSIONS);

    return (
        <Box>
            <Text className='text-lg' >
                Language:
            </Text>
            <Menu>
                <MenuButton as={Button}>{language} </MenuButton>
                <MenuList>
                    {languages.map(([lang, version]) => (
                        <MenuItem key={lang} 
                        // color={
                        //     lang === language ? "text-blue-400" : ""
                        // }
                        // bg={
                        //     lang === language ? "bg-gray-700" : ""
                        // }
                        onClick={()=> onSelect(lang)}>
                            {lang}
                            &nbsp;
                            <Text className='text-sm'>
                                ({version})
                            </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>

        </Box>
    )
}

export default LanguageSelector
