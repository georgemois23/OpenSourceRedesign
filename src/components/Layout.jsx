import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box mt="80px" flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
