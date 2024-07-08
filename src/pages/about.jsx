import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../components/shared/Header/Navbar'
import Main from '../components/shared/About/main'
export default function About() {
    return (
        <Box className='bg-gradient-to-r from-cyan-300 to-blue-900 min-h-screen'>
            <Navbar />
            <Main />
        </Box>
    )
}
