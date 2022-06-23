import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
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
      {number}
    </Button>;
  }

  return (
    <Button
      size="xs"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {number}
    </Button>
  );
}
