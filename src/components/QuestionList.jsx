import { Box, List, ListItem } from "@chakra-ui/react";
import { questions } from "../constants/data";
import { Link } from "react-router-dom";

function QuestionList() {
    return (
        <Box>
            <List className="text-white">
                {questions.map((question) => (
                    <ListItem key={question.id}>
                        <Link to={`/compiler/${question.id}`}>
                            {question.title}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default QuestionList;
