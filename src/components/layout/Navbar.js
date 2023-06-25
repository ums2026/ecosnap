import { Button, Flex, Link, Spacer } from "@chakra-ui/react";
import { DASHBOARD, SCANNER, CHATBOT, AWARENESSASSISTANT } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();

  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="100vw"
      borderTop="6px solid"
      borderTopColor="teal.400"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
      left={0} // Added this line to align the navbar to the left edge
    >
      <Flex px="4" w="100%" maxW="1200px" align="center">
        <Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          Home
        </Link>
        <Link ml="30px" color="teal" as={RouterLink} to={SCANNER} fontWeight="bold">
          Trash Scanner
        </Link>
        <Link ml="30px" color="teal" as={RouterLink} to={CHATBOT} fontWeight="bold">
          EcoBot
        </Link>
        <Link ml="30px" color="teal" as={RouterLink} to={AWARENESSASSISTANT} fontWeight="bold">
          EcoImages
        </Link>
        <Spacer />
        <Button
          colorScheme="teal"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}
