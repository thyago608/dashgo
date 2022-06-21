import { Button, HStack, Box } from "@chakra-ui/react";

interface PaginationProps {
  pagesAmount?: number;
}

export function Pagination({ pagesAmount }: PaginationProps) {
  const array = [1, 23, 3, 4, 5];

  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button
          size="xs"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default",
          }}
        >
          1
        </Button>

        <Button
          size="xs"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>

        <Button
          size="xs"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>

        <Button
          size="xs"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}
