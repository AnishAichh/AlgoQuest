import { Box } from '@chakra-ui/react';
import React from 'react';
import Profile from '../components/shared/About/main';
import Navbar from '../components/shared/Header/Navbar';
export default function About() {
    return (
        <Box className=' min-h-screen' style={{ background: "#1a1a2e" }}>
            <Navbar />
            <Profile />
        </Box>
    )
}
