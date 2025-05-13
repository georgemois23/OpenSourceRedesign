import { useState,useEffect,useRef} from "react";
import { Outlet, useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Box, Flex, Image, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon,ChevronUpIcon } from "@chakra-ui/icons";
import { MenuDrawer } from "./MenuDrawer";  
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { NAV_ITEMS, SOURCES_MENU_ITEMS } from "../../config/navigationConfig";
import  { ToolTipUnderConstruction } from "../ToolTipUnderConstruction";
import { NavItem } from "./NavItem";
import Footer from "../Footer/Footer";
  import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
const location = useLocation();
  
  useEffect(() => {
    onClose();
  }, [location.pathname]);
  const goToHomePage = () => {
  navigate("/");
  onClose(); 
};
  const toggleMobileMenu = () => {
  if (isOpen) {
    onClose();
  } else {
    onOpen();
  }
};

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
        backdropBlur={"4px"}
        height={{base:"70px", lg:"80px"}}
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
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.3s ease-in-out"
          />
        </Flex>

        {/* Right Navigation (Desktop) */}
        <NavSection 
          items={NAV_ITEMS.slice(4)} 
          sourcesItems={SOURCES_MENU_ITEMS} 
        />

        {/* Mobile Menu Button */}
        <IconButton
          icon={<HamburgerIcon boxSize={5} />}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          display={{ base: "flex", lg: "none" }}
          onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleMobileMenu();
        }}
          variant="ghost"
          color="brand.dark.text"
          ml="auto"
          isRound
           minW="48px"
           minH="48px" 
           zIndex={9999}
        _hover={{ bg: "transparent" }}
        _active={{ bg: "transparent",transform: "scale(0.9)"}}
        _focus={{ boxShadow: "none" }}
        transition="all 0.2s"
        position="relative"
        />
      </Flex>

      <MenuDrawer isOpen={isOpen} onClose={onClose} />

     
    </Box>
  );
}

const NavSection = ({ items, sourcesItems }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const timeoutRef = useRef(null);

const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(onClose, 300); // Delay close
};

const handleMouseEnter = () => {
  clearTimeout(timeoutRef.current); // Cancel close if mouse re-enters
  onOpen();
};
   const location = useLocation();
  return(
  <Flex
    gap={6}
    align="center"
    flex="1" 
    justify="center"
    display={{ base: "none", lg: "flex" }}
    fontWeight={400}
    position="relative"
    zIndex="1"
  >
    {items.map((item) => (
      <NavItem key={item.path} item={item} />
    ))}
    
    {sourcesItems && (
      <Menu borderRadius={8} isOpen={isOpen} isLazy autoSelect={false} placement="bottom"  closeOnSelect={true} delay={2} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Box} cursor="pointer" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        rightIcon={<ChevronDownIcon />} _hover={{color:'brand.dark.secondary'}} position="relative" >
              ΠΗΓΕΣ 
               <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                      key={isOpen ? "open" : "closed"}
                                      initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                      exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                                      transition={{ duration: 0.1, ease: "easeOut" }}
                                      style={{ display: "inline-block", marginLeft: "0.1rem",pointerEvents: "none"  }}
                                    >
                                      {isOpen ? <ChevronUpIcon  boxSize={5} /> : <ChevronDownIcon boxSize={5} />}
                                    </motion.span>
                                  </AnimatePresence>
              {/* <ChevronDownIcon /> */}
            </MenuButton>
            <MenuList  
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
             borderRadius={8} bg='rgba(0, 10, 38, 1)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.15)">
              {sourcesItems.map((item) => (
                <MenuItem 
                  key={item.label}
                  bg='rgba(0, 10, 38, 0.6)' 
                  color={(location.pathname === item.path) ? "brand.dark.secondary" : "brand.dark.text"}
                  backdropFilter='blur(4px)' 
                  boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                  onClick={() => {
                    if (item.underConstruction) return;
                    if (item.type === "external") {
                      window.open(item.path, '_blank', 'noopener,noreferrer');
                    } else {
                      navigate(item.path);
                    }
                  }}
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
);}