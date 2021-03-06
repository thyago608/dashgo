import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thyago Ribeiro</Text>
          <Text color="gray.300" fontSize="small">
            thyagoribeiro608@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Thyago Ribeiro"
        src="https://github.com/thyago608.png"
      />
    </Flex>
  );
}
