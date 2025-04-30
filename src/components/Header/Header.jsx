import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Flex, Image, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { MenuDrawer } from "./MenuDrawer";  
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { NAV_ITEMS, SOURCES_MENU_ITEMS } from "../../config/navigationConfig";
import  { ToolTipUnderConstruction } from "../ToolTipUnderConstruction";
import { NavItem } from "./NavItem";
import Footer from "../Footer/Footer";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const goToHomePage = () => navigate("/");
  const toggleMobileMenu = () => onOpen();

  return (
    <Box>
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
        backgroundColor='rgba(0, 10, 38, 0.98)'
        height="80px"
        fontFamily="Arial"
      >
        {/* Left Navigation (Desktop) */}
        <NavSection items={NAV_ITEMS.slice(0, 4)} />

        {/* Logo */}
        <Flex
          align="center"
          justify="center"
          flex="0 0 auto"
          cursor="pointer"
          onClick={goToHomePage}
        >
          <Image
            draggable={false}
            src={'/logo.png'}
            w={{ base: "40px", md: "60px" }}
          />
        </Flex>

        {/* Right Navigation (Desktop) */}
        <NavSection 
          items={NAV_ITEMS.slice(4)} 
          sourcesItems={SOURCES_MENU_ITEMS} 
        />

        {/* Mobile Menu Button */}
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

     
    </Box>
  );
}

const NavSection = ({ items, sourcesItems }) => (
  <Flex
    gap={6}
    align="center"
    flex="1" 
    justify="center"
    display={{ base: "none", lg: "flex" }}
  >
    {items.map((item) => (
      <NavItem key={item.path} item={item} />
    ))}
    
    {sourcesItems && (
      <Menu borderRadius={8} isLazy autoSelect={false} placement="bottom" closeOnSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Box} cursor="pointer" rightIcon={<ChevronDownIcon />}>
              ΠΗΓΕΣ <ChevronDownIcon />
            </MenuButton>
            <MenuList borderRadius={8} bg='rgba(0, 10, 38, 1)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.15)">
              {sourcesItems.map((item) => (
                <MenuItem 
                  key={item.label}
                  bg='rgba(0, 10, 38, 0.6)' 
                  backdropFilter='blur(4px)' 
                  boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                  onClick={() => !item.underConstruction && window.open(item.path, '_blank')}
                  _hover={{ color: "brand.dark.secondary" }}
                >
                  {item.underConstruction ? (
                    <ToolTipUnderConstruction where={item.label} />
                  ) : (
                    <>
                      {item.label} {item.icon}
                    </>
                  )}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    )}
  </Flex>
);