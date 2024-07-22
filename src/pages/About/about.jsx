import { Box } from '@chakra-ui/react';
import React from 'react';
import Profile from '../../context/Profile/Profile';
import {Navbar} from '../../components/organisms';
export default function About() {
    return (
        <Box className=' min-h-screen' style={{ background: "#1a1a2e" }}>
            <Navbar />
            <Profile />
        </Box>
    )
}
