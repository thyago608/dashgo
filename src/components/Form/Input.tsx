import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";

import { FieldErrorsImpl } from "react-hook-form";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  error?: FieldErrorsImpl;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = {}, ...rest },
  ref
) => {
  const isInvalid = !!error[name];

  return (
    <FormControl isInvalid={isInvalid}>
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
      {isInvalid && (
        <FormErrorMessage>
          <>{error[name]?.message}</>
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
