import Head from "next/head";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Sidebar } from "components/Sidebar";
import { Header } from "components/Header";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "components/Pagination";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Listagem de Usuários | Dashgo</title>
      </Head>
      <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6" justify="center">
          <Sidebar />
          <Box
            flex="1"
            borderRadius={6}
            bg="gray.800"
            px={["3", "8"]}
            py={["6","8"]}
          >
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
              </Heading>
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
            </Flex>

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
                <Tr>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Thyago Ribeiro</Text>
                      <Text fontSize="sm" color="gray.300">
                        thyagoribeiro608@gmail.com
                      </Text>
                    </Box>
                  </Td>
                  {isWideVersion && (
                    <>
                      <Td>20 de Junho, 2022</Td>
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
              </Tbody>
            </Table>
            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
