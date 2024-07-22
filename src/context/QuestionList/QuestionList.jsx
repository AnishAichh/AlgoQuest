import { Box, List, Table, TableContainer, Tbody, Th, Thead, Tr, Td, Select, Input, InputGroup, InputLeftElement, Flex } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';

function QuestionList() {
    const questions = useSelector((state) => state.questions.questions);
    const [difficultyFilter, setDifficultyFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

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

    const filterQuestions = (questions, difficulty) => {
        if (difficulty) {
            return questions.filter(question => question.difficulty === difficulty);
        }
        return questions;
    };

    const handleSortChange = (e) => {
        setDifficultyFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredQuestions = questions.filter(question =>
        question.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedQuestions = filterQuestions(filteredQuestions, difficultyFilter);

    return (
        <Box className="w-5/6 mx-auto">
            <Flex mb={4} align="center" justifyContent="space-between">
                <Select
                    onChange={handleSortChange}
                    placeholder="Difficulty"
                    className="text-white bg-white"
                    width="150px"
                >
                    <option value="Easy" className="text-black">Easy</option>
                    <option value="Medium" className="text-black">Medium</option>
                    <option value="Hard" className="text-black">Hard</option>
                </Select>
                <InputGroup width="400px">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                        placeholder="Search questions"
                        onChange={handleSearchChange}
                        className="text-white bg-gray-800"
                    />
                </InputGroup>
            </Flex>
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
                                <Tr key={question.id} className="hover:bg-gray-800">
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
