import Head from "next/head";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    Link as ChakraLink,
    useBreakpointValue,
} from "@chakra-ui/react";
import { Sidebar } from "components/Sidebar";
import { Header } from "components/Header";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "components/Pagination";
import { User } from "types/user";
import { useState } from "react";
import Link from "next/link";
import { client } from "services/mirage/queryClient";
import { useUsers } from "services/hooks/useUsers";
import { api } from "services/api";

export default function UserList() {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetching, error } = useUsers(page);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    async function handlePrefetchUser(userId: string) {

        await client.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`);

            return response.data;
        }, {
            staleTime: 1000 * 60 * 10
        });
    }

    return (
        <>
            <Head>
                <title>Listagem de Usuários | Dashgo</title>
            </Head>
            <Box>
                <Header />
                <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6" justify="center">
                    <Sidebar />
                    <Box flex="1" borderRadius={6} bg="gray.800" p={["5", "8"]}>
                        <Flex mb="8" justify="space-between" align="center">
                            <Heading
                                size={["md", "lg"]}
                                fontWeight="normal"
                            >
                                Usuários
                                {!isLoading && isFetching &&
                                    <Spinner
                                        size="sm"
                                        color="gray.500"
                                        ml={4}
                                    />}
                            </Heading>
                            <Link href="/users/create" passHref>
                                <Button
                                    as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="pink"
                                    leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                                    cursor="pointer"
                                >
                                    Criar novo
                                </Button>
                            </Link>
                        </Flex>
                        {isLoading ? (
                            <Flex justify="center">
                                <Spinner />
                            </Flex>
                        ) : (
                            error ? (
                                <Text>Desculpe, ocorreu um erro no servidor</Text>
                            ) : (
                                <>
                                    <Table colorScheme="whiteAlpha">
                                        <Thead>
                                            <Tr>
                                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                                    <Checkbox colorScheme="pink" />
                                                </Th>
                                                <Th>Usuário</Th>
                                                {isWideVersion && (
                                                    <>
                                                        <Th>Data de Cadastro</Th>
                                                        <Th width="8"></Th>
                                                    </>
                                                )}
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {data.users.map((user: User) => (
                                                <Tr key={user.id}>
                                                    <Td px={["4", "4", "6"]}>
                                                        <Checkbox colorScheme="pink" />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <ChakraLink
                                                                color="purple.400"
                                                                onMouseEnter={() => handlePrefetchUser(user.id)}
                                                            >
                                                                <Text fontWeight="bold" fontSize={["sm", "md"]}>
                                                                    {user.name}
                                                                </Text>
                                                            </ChakraLink>
                                                            <Text fontSize={["xs", "sm"]} color="gray.300">
                                                                {user.email}
                                                            </Text>
                                                        </Box>
                                                    </Td>
                                                    {isWideVersion && (
                                                        <>
                                                            <Td>{user.createdAt}</Td>
                                                            <Td>
                                                                <Button
                                                                    size="sm"
                                                                    fontSize="sm"
                                                                    colorScheme="purple"
                                                                    cursor="pointer"
                                                                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                                                    iconSpacing={0}
                                                                />
                                                            </Td>
                                                        </>
                                                    )}
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                    <Pagination
                                        totalCountOfRegisters={data.totalCount}
                                        currentPage={page}
                                        onPageChange={setPage}
                                    />
                                </>
                            )
                        )}
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
