import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/shared/Header/Navbar'
import Main from '../components/shared/About/main'
export default function About() {
    return (
        <Box className=' min-h-screen' style={{background:"#1a1a2e"}}>
            <Navbar />
            <Main />
        </Box>
    )
}
