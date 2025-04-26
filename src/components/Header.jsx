import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Box, Flex, Heading, Image, IconButton, useDisclosure, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MenuDrawer } from "./MenuDrawer";  
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const goToHomePage = () => {
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
    onOpen();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Box >
      <Flex
        as="header"
        position="fixed"
        top="0"
        w="100%"
        align="center"
        justify="center"
        paddingX="2rem"
        paddingY="1rem"
        zIndex="999"
        // bg="brand.dark.primary"
        // bg="linear-gradient(90deg, #000a26, #001a66)"
        backgroundColor= 'rgba(0, 10, 38, 0.98)'
        height="80px"
        fontFamily="Arial"
             >
        {/* Left Links */}
        <Flex
          gap={6}
          align="center"
          flex="1"
          justify="center"
          display={{ base: "none", lg: "flex" }}
        >
          <Link to="/blog">
            <Text fontSize="md" _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}>
              BLOG
            </Text>
          </Link>
          <Link to="/sponsors">
            <Text fontSize="md" color={isActive("/sponsors") ? "brand.dark.secondary" : "brand.dark.text"}  _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}>
              ΧΟΡΗΓΟΙ
            </Text>
          </Link>
          <Link to="/register">
            <Text fontSize="md" color={isActive("/register") ? "brand.dark.secondary" : "brand.dark.text"} _hover={{ color: "brand.dark.secondary", cursor: "pointer" , fontWeight: "600"}}>
              ΕΓΓΡΑΦΗ
            </Text>
          </Link>
        </Flex>

        {/* Center Logo */}
        <Flex
          align="center"
          justify="center"
          flex="0 0 auto"
          cursor="pointer"
          onClick={goToHomePage}
        >
          <Image
            src={'https://avatars.githubusercontent.com/u/109147894?s=200&v=4'}
            w={{ base: "40px", md: "60px" }}
          />
          <Heading
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="500"
            fontFamily="Syne"
            ml="2"
            display={{ base: "none", md: "block" }}
          >
            {/* OpenSource UoM */}
          </Heading>
        </Flex>

        {/* Right Links */}
        <Flex
          gap={6}
          align="center"
          flex="1"
          justify="center"
          display={{ base: "none", lg: "flex" }}
          
        >
          <Link to="/myuom">
            <Text fontSize="md" _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }} padding="4px 0">
              myUoM
            </Text>
          </Link>
          <Link to="/resources">
            <Text fontSize="md" _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}padding="4px 0">
              README
            </Text>
          </Link>
          <Link to="/contact">
            <Text fontSize="md" _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}padding="4px 0">
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Text>
          </Link>
        </Flex>

        {/* Mobile Menu Icon */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          display={{ base: "flex", lg: "none" }}
          onClick={toggleMobileMenu}
          variant="ghost"
          color="white"
          ml="auto"
        />
      </Flex>

      {/* Drawer for Mobile Menu */}
      <MenuDrawer isOpen={isOpen} onClose={onClose} />

      {/* Content Offset */}
      <Box mt="80px">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
