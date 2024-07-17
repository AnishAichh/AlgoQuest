import { Box, List, Table, TableContainer, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function QuestionList() {
    const questions = useSelector((state) => state.questions.questions);

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'Easy':
                return 'text-green-400';
            case 'Medium':
                return 'text-yellow-300';
            case 'Hard':
                return 'text-red-400';
            default:
                return '';
        }
    };

    return (
        <Box className="w-5/6 mx-auto">
            <List className="text-white">
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Status</Th>
                                <Th>Title</Th>
                                <Th>Solution</Th>
                                <Th>Acceptance</Th>
                                <Th>Difficulty</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {questions.map((question) => (
                                <Tr key={question.id} className="hover:bg-gray-900">
                                    <Td>
                                        {question.status}
                                    </Td>
                                    <Td>
                                        <Link to={`/compiler/${question.id}`}>{question.title}</Link>
                                    </Td>
                                    <Td>
                                        <Link to={``}>{typeof question.solution === 'object' ? question.solution.text : question.solution}</Link>
                                    </Td>
                                    <Td>{question.acceptance}</Td>
                                    <Td className={`${getDifficultyClass(question.difficulty)}`}>{question.difficulty}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </List>
        </Box>
    );
}

export default QuestionList;
