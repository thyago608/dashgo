import Head from "next/head";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "components/Form/Input";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Sign-in | Dashgo</title>
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          direction="column"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
        >
          <Stack spacing="4">
            <Input name="email" label="email" type="email" />
            <Input name="password" label="senha" type="password" />
          </Stack>
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
