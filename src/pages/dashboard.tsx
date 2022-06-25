import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { options, series } from "lib/charts";

const Charts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Dashgo</title>
      </Head>
      <Flex direction="column" h="100vh">
        <Header />
        <Flex w="100%" my="6" justify="center" maxWidth={1200} mx="auto" px="6">
          <Sidebar />
          <SimpleGrid flex="1" gap="4" minChildWidth="280px">
            <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Inscritos da semana
              </Text>
              <Charts
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
            <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">
                Taxa de abertura
              </Text>
              <Charts
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
