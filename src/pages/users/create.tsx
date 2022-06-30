import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Sidebar } from "components/Sidebar";
import { Header } from "components/Header";
import { Input } from "components/Form/Input";

export default function CreateUser() {
  return (
    <>
      <Head>
        <title>Listagem de Usuários | Dashgo</title>
      </Head>
      <Box>
        <Header />
        <Flex
          w="100%"
          my="6"
          maxWidth={1200}
          mx="auto"
          px={["2", "6"]}
          justify="center"
        >
          <Sidebar />
          <Box flex={1} borderRadius={6} bg="gray.800" p={["4", "8"]}>
            <Heading size="lg" fontWeight="normal">
              Criar Usuário
            </Heading>
            <Divider my="6" borderColor="gray.700" />
            <VStack spacing={["4", "8"]}>
              <SimpleGrid minChildWidth={200} spacing="8" w="100%">
                <Input name="name" label="Nome Completo" />
                <Input name="email" label="Email" type="email" />
              </SimpleGrid>

              <SimpleGrid minChildWidth={200} spacing={["4", "8"]} w="100%">
                <Input name="password" type="password" label="Senha" />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha" size={["sm", "md"]}>
                    Cancelar
                  </Button>
                </Link>
                <Button colorScheme="pink" size={["sm", "md"]}>
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
