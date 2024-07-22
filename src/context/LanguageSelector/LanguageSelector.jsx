import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { LANGUAGE_VERSIONS } from "../../utils";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box className="mb-2 text-xl">
      <Menu>
        <MenuButton as={Button} className="text-blue-700">
          {language}
        </MenuButton>
        <MenuList>
          {languages.map(([language, version]) => (
            <MenuItem key={language} onClick={() => onSelect(language)}>
              <div className="text-black font-medium">
                {language}
                &nbsp;
                <span className="color-gray-500 text-lg">{version}</span>
              </div>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
