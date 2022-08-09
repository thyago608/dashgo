import { createContext, ReactNode, useEffect } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

type SidebarDrawerContextData = UseDisclosureReturn;

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextData
);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();

  useEffect(() => {
    disclosure.onClose();
  }, [disclosure]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}
