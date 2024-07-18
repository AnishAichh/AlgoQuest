import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/organisms/Header/Navbar'
import Main from '../components/organisms/About/main'
export default function About() {
    return (
        <Box className=' min-h-screen' style={{background:"#1a1a2e"}}>
            <Navbar />
            <Main />
        </Box>
    )
}
