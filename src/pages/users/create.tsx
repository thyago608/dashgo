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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "services/api";
import { useRouter } from "next/router";
import { client } from "services/mirage/queryClient";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        create_at: new Date(),
      }
    });
    return response.data.user;
  }, {
    onSuccess: () => client.invalidateQueries(['users'])
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await createUser.mutateAsync(values);
    router.push('/users');
  };

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
          <Box
            as="form"
            flex={1}
            borderRadius={6}
            bg="gray.800"
            p={["4", "8"]}
            onSubmit={handleSubmit(handleCreateUser)}
          >
            <Heading size="lg" fontWeight="normal">
              Criar Usuário
            </Heading>
            <Divider my="6" borderColor="gray.700" />
            <VStack spacing={["4", "8"]}>
              <SimpleGrid minChildWidth={200} spacing="8" w="100%">
                <Input
                  type="text"
                  label="Nome Completo"
                  error={errors}
                  {...register("name")}
                />
                <Input
                  type="email"
                  label="Email"
                  error={errors}
                  {...register("email")}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth={200} spacing={["4", "8"]} w="100%">
                <Input
                  type="password"
                  label="Senha"
                  error={errors}
                  {...register("password")}
                />
                <Input
                  type="password"
                  label="Confirmação da senha"
                  error={errors}
                  {...register("password_confirmation")}
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
                <Button
                  type="submit"
                  colorScheme="pink"
                  size={["sm", "md"]}
                  isLoading={isSubmitting}
                >
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
