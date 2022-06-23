import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1200}
      h="20"
      mt="4"
      mx="auto"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBar />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
