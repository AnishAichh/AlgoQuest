import { Box, List, Table, TableContainer, Tbody, Th, Thead, Tr, Td, Select } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from 'react';

function QuestionList() {
    const questions = useSelector((state) => state.questions.questions);
    const [sortOrder, setSortOrder] = useState('');

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

    const difficultyOrder = {
        Easy: 1,
        Medium: 2,
        Hard: 3,
    };

    const sortQuestions = (questions, order) => {
        if (order) {
            return [...questions].sort((a, b) => {
                if (order === "Easy") {
                    return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
                } else if (order === "Medium") {
                    return difficultyOrder[a.difficulty] === 2 ? -1 : 1;
                } else if (order === "Hard") {
                    return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
                } else {
                    return 0;
                }
            });
        }
        return questions;
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedQuestions = sortQuestions(questions, sortOrder);

    return (
        <Box className="w-5/6 mx-auto">
            <Select onChange={handleSortChange} placeholder="Difficulty" mb={4} className="text-white bg-gray-800">
                <option value="Easy" className="text-black">Easy</option>
                <option value="Medium" className="text-black">Medium</option>
                <option value="Hard" className="text-black">Hard</option>
            </Select>
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
                            {sortedQuestions.map((question) => (
                                <Tr key={question.id} className="hover:bg-gray-900">
                                    <Td>{question.status}</Td>
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
