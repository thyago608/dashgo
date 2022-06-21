import Head from "next/head";
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
        <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6">
          <Sidebar />
          <Box flex="1" borderRadius={6} bg="gray.800" p="8">
            <Heading size="lg" fontWeight="normal">
              Criar Usuário
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid minChildWidth={240} spacing="8" w="100%">
                <Input name="name" label="Nome Completo" />
                <Input name="email" label="Email" type="email" />
              </SimpleGrid>

              <SimpleGrid minChildWidth={240} spacing="8" w="100%">
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
                    <Button colorScheme="whiteAlpha">Cancelar</Button>
                    <Button colorScheme="pink">Salvar</Button>
                </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
