import { Box, Code } from "@chakra-ui/react";
import CodeEditor from "../../context/CodeEditor/CodeEditor"
import { useParams } from "react-router-dom";
import {Navbar} from "../../components/organisms";

export default function Compiler() {
    const { questionId } = useParams();

    return (
        <Box className="min-h-fullscreen bg-coolGray-800 text-white bg-gray-900">
            <Navbar />
            <CodeEditor questionId={questionId} />
        </Box>
    )
}
