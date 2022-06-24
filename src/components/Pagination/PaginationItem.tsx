import { Button, ButtonProps } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
  
    const buttonStyle: ButtonProps = isCurrent ? 
        { colorScheme: "pink", disabled: true, _disabled: { bg: "pink.500", cursor: "default" }}: 
        { bg: "gray.700", _hover: { bg: "gray.500" }};

    return (
        <Button size="xs" fontSize="xs" width="4" {...buttonStyle}>
            {number}
        </Button>
    );
}
