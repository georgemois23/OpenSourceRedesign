import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Box, Flex, Heading, Image, IconButton, useDisclosure, Text,Button } from "@chakra-ui/react";
import { HamburgerIcon,ChevronDownIcon,ExternalLinkIcon } from "@chakra-ui/icons";
import { MenuDrawer } from "./MenuDrawer";  
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import { ToolTipUnderConstruction } from "./ToolTipUnderConstruction";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

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
        <Flex
          gap={6}
          align="center"
          flex="1" 
          justify="center"
          display={{ base: "none", lg: "flex" }}
        >
          <Text onClick={()=> navigate("/")} >
            <Text fontSize="md" color={isActive("/") ? "brand.dark.secondary" : "brand.dark.text"} _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}>
             ΑΡΧΙΚΗ
            </Text>
            </Text>
          <Text onClick={()=> navigate("/blog")} >
            <Text fontSize="md" color={isActive("/blog") ? "brand.dark.secondary" : "brand.dark.text"} _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}>
              {/* BLOG */}
              <ToolTipUnderConstruction where={'BLOG'} />
            </Text>
          </Text>
          <Text onClick={()=> navigate("/sponsors")} >
            <Text fontSize="md" color={isActive("/sponsors") ? "brand.dark.secondary" : "brand.dark.text"}  _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}>
              ΧΟΡΗΓΟΙ
            </Text>
          </Text>
          <Text onClick={()=> navigate("/register")} >
            <Text fontSize="md" color={isActive("/register") ? "brand.dark.secondary" : "brand.dark.text"} _hover={{ color: "brand.dark.secondary", cursor: "pointer" , fontWeight: "600"}}>
              ΕΓΓΡΑΦΗ
            </Text>
          </Text>
        </Flex>

        <Flex
          align="center"
          justify="center"
          flex="0 0 auto"
          cursor="pointer"
          onClick={goToHomePage}
        >
          <Image
          draggable={false}
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
          </Heading>
        </Flex>

        <Flex
          gap={6}
          align="center"
          flex="1"
          justify="center"
          display={{ base: "none", lg: "flex" }}
          
        >
          <Text onClick={() => window.open('https://my.uom.gr/','_blank')}>
            <Text fontSize="md"  _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }} padding="4px 0">
            myUoM
            </Text>
          </Text>
          <Menu borderRadius={8}  isLazy autoSelect={false} placement="bottom"  closeOnSelect={false} >
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Box} cursor="pointer" rightIcon={<ChevronDownIcon />}>
        ΠΗΓΕΣ  <ChevronDownIcon />
      </MenuButton>
      <MenuList  borderRadius={8} bg='rgba(0, 10, 38, 1)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
  border="1px solid rgba(255, 255, 255, 0.15)">
        <MenuItem  bg='rgba(0, 10, 38, 0.6)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
   onClick={() => window.open('https://github.com/open-source-uom','_blank')}
        _hover={{ color: "brand.dark.secondary" }}
        >Αποθετήριο Github <ExternalLinkIcon fontSize={14} ml={1} mb={1}/></MenuItem>
        <MenuItem  bg='rgba(0, 10, 38, 0.6)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)" onClick={() => window.open('https://gitlab.com/opensourceuom','_blank')}
        _hover={{ color: "brand.dark.secondary" }}
        >Αποθετήριο Gitlab <ExternalLinkIcon fontSize={14} ml={1} mb={1}/></MenuItem>
        <MenuItem  bg='rgba(0, 10, 38, 0.6)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)" 
        _hover={{ color: "brand.dark.secondary" }}
        ><ToolTipUnderConstruction where={'Βασικές εντολές LINUX'} /></MenuItem>
        
      </MenuList>
    </>
  )}
</Menu>
          
          <Text onClick={()=> navigate("/readme")} >
            <Text fontSize="md" color={isActive("/readme") ? "brand.dark.secondary" : "brand.dark.text"} _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}padding="4px 0">
              {/* README */}
              <ToolTipUnderConstruction where={'README'} />
            </Text>
          </Text>
          <Text onClick={()=> navigate("/contact")} >
            <Text fontSize="md" color={isActive("/contact") ? "brand.dark.secondary" : "brand.dark.text"} _hover={{ color: "brand.dark.secondary", cursor: "pointer", fontWeight: "600" }}padding="4px 0">
              ΕΠΙΚΟΙΝΩΝΙΑ
            </Text>
          </Text>
        </Flex>

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

      <MenuDrawer isOpen={isOpen} onClose={onClose} />

      <Box mt="80px">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
