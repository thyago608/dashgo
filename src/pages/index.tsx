import Head from "next/head";
import { Flex, Button, Stack, useBreakpointValue } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "components/Form/Input";
import { Logo } from "components/Header/Logo";

export default function SignIn() {
  const spacingTopLogo = useBreakpointValue({
    base: "8",
    lg: "12",

  });

  const { register, handleSubmit } = useForm();

  return (
    <>
      <Head>
        <title>Sign-in | Dashgo</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        direction="column"
        position="relative"
      >
        <Flex
          width="100%"
          position="absolute"
          top={spacingTopLogo}
          left="0"
          justifyContent="center"
        >
          <Logo fontSize="4xl" />
        </Flex>

        <Flex
          as="form"
          direction="column"
          width="90%"
          maxWidth={360}
          bg="gray.800"
          py="8"
          px={["6", "8"]}
          borderRadius={8}
          mt="15"
        >
          <Stack spacing="4">
            <Input 
              label="email" 
              type="email" 
              {...register('email')}
            />
            <Input 
               label="senha" 
               type="password"
                {...register('password')}   
            />
          </Stack>
          <Button type="submit" mt="6" colorScheme="pink" size={["md", "lg"]}>
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
