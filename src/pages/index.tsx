import Head from "next/head";
import { useEffect } from "react";
import { Flex, Button, Stack, useBreakpointValue } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components/Form/Input";
import { Logo } from "components/Header/Logo";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormDataSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
});

export default function SignIn() {
  const spacingTopLogo = useBreakpointValue({
    base: "8",
    lg: "12",

  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormDataSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/users').then(response => response.json()).then(data => console.log(data))
  }, []);

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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              label="email"
              type="email"
              error={errors}
              {...register('email')}
            />
            <Input
              label="senha"
              type="password"
              error={errors}
              {...register('password')}
            />
          </Stack>
          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size={["md", "lg"]}
            isLoading={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
