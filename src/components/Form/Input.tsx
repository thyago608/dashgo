import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && (
        <FormLabel
          htmlFor={name}
          textTransform="capitalize"
          fontSize={["sm", "md"]}
        >
          {label}
        </FormLabel>
      )}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: "gray.900",
        }}
        size={["md", "lg"]}
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
