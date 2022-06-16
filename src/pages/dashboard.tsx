import Head from "next/head";
import { Header } from "components/Header";
import { Flex } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Dashgo</title>
      </Head>
      <Flex>
        <Header />
        <Flex
            
        >

        </Flex>
      </Flex>
    </>
  );
}
