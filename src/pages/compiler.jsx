import { Box, Code } from "@chakra-ui/react"
import CodeEditor from "../components/CodeEditor"
import { useParams } from "react-router-dom";
import Navbar from "../components/Shared/Header/Navbar";
export default function Compiler() {
    const { questionId } = useParams();
    return (
        <Box className="min-h-fullscreen bg-coolGray-800 text-white">
            <Navbar></Navbar>
            <CodeEditor questionId={questionId} />
        </Box>
    )
}
