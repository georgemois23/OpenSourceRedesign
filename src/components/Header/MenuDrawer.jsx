import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
    Box,
    Text,
    Image,
    Button,
  } from "@chakra-ui/react";
  import { useBreakpointValue } from '@chakra-ui/react';
  import { ChevronDownIcon, ExternalLinkIcon,InfoIcon,ChevronUpIcon} from '@chakra-ui/icons';
  import { Menu, MenuButton, MenuList, MenuItem,Flex } from '@chakra-ui/react';
  import { NAV_ITEMS, SOURCES_MENU_ITEMS } from "../../config/navigationConfig";
  import { NavItem } from "./NavItem";
  import  {useNavigate,useLocation} from "react-router-dom";
  import { ToolTipUnderConstruction } from "../ToolTipUnderConstruction";
  import { motion, AnimatePresence } from "framer-motion";
  import {CloseIcon} from "../../assets/icons";
  
  export function MenuDrawer({ isOpen, onClose }) {
    const navigate = useNavigate();
    const location = useLocation();
    const goToHomePage = () => {
      navigate("/");
      onClose();
    };
    const MotionDrawerContent = motion(DrawerContent);
  
    return (
      <Drawer onClose={onClose} isOpen={isOpen} size="full" closeOnBlur >
        <DrawerOverlay />
        <DrawerContent sx={{
          zIndex: '99999 !important',
          bg: "rgba(0, 10, 38, 0.7)",
          width: "100%",
          backdropFilter: "blur(20px)",
          minHeight: '100vh',
        }}>
          <DrawerCloseButton sx={{ zIndex: 9999 }}  />
          <DrawerHeader fontWeight={800} opacity={1} textAlign={"center"} onClick={goToHomePage}>
            <Image
              draggable={false}
              src={'/logo.png'}
              w={{ base: "40px", md: "50px" }}
              marginInline={"auto"}
            />
          </DrawerHeader>
          {/* <DrawerBody userSelect={'none'}> */}
          <DrawerBody 
  userSelect="none" 
  display="flex" 
  flexDirection="column" 
  overflow="hidden" 
  p={0}
>
  <Box flex="1" overflowY="auto" px={4} py={4}>
          <Flex
            direction="column"
            align="center"
            justify={"center"}
            width="90%"
            pt={4}
            maxW="300px"
            gap={{xs:2,sm:3}} 
            marginInline={"auto"}
          >
            {NAV_ITEMS.map((item) => (
              <Box 
                key={item.path} 
                width="100%"
                marginInline={"auto"}
                textAlign="center"
              >
                <NavItem 
                  item={item} 
                  onClose={onClose} 
                  isMobile 
                />
              </Box>
            ))}
              
              <Menu borderRadius={8} zIndex='99999' autoSelect={false} 
              modifiers={[{ name: "flip", enabled: false }]}
            placement={useBreakpointValue({ xxs: 'top',xs:'top', sm: 'bottom' })}
              closeOnSelect={false} 
              preventOverflow
  isLazy >
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={Text}
                      width="full"
                      fontSize="lg"
                      fontWeight="800"
                      paddingY={3}
                      ml={1}
                      textAlign="center"
                      borderBottom="2px solid transparent"
                      color="brand.dark.text"
                      _hover={{ cursor: "pointer" }}
                      _focus={{ boxShadow: "none", outline: "none" }}
                      _active={{ background: "transparent" }}
                      _focusVisible={{ background: "transparent" }}
                      userSelect="none"
                      sx={{ WebkitTapHighlightColor: "transparent" }}
                    >

                      ΠΗΓΕΣ 
                      {/* {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />} */}
                      <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={isOpen ? "open" : "closed"}
                        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                        style={{ display: "inline-block", marginLeft: "0.5rem" }}
                      >
                        {isOpen ? <ChevronUpIcon  boxSize={5} /> : <ChevronDownIcon boxSize={5} />}
                      </motion.span>
                    </AnimatePresence>




                    </MenuButton>
                    {/* <MenuList borderRadius={8}  bg='rgba(0, 10, 38, 1)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.15)" mt={0}> */}
                    <MenuList
  position="static"
  width={"100%"}
  borderRadius={8}
  bg="rgba(0, 10, 38, 1)"
  backdropFilter="blur(4px)"
  boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
  border="1px solid rgba(255, 255, 255, 0.15)"
  mt={0}
  zIndex="100"
>

                      {SOURCES_MENU_ITEMS.map((item) => (
                        <MenuItem 
                          key={item.label}
                          bg='rgba(0, 10, 38, 0.6)' 
                          backdropFilter='blur(4px)' 
                          boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                          color={(location.pathname === item.path) ? "brand.dark.secondary" : "brand.dark.text"}
                          onClick={() => {
                            if (item.underConstruction) return;
                            if (item.type === "external") {
                              window.open(item.path, '_blank', 'noopener,noreferrer');
                            } else {
                              navigate(item.path);
                              onClose(); 
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
  
              {/* <Text position="absolute" bottom="8vh" fontWeight={200}>
                <InfoIcon pb="0.5" fontSize="18px" /> Σελίδα υπο κατασκευή
              </Text> */}
            </Flex>
            </Box>
          </DrawerBody>
          {/* <DrawerFooter
                    justifyContent={"center"}
                >
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        fontWeight="bold"
                        fontFamily="Syne"
                        fontSize={{ base: "sm", lg: "lg" }}
                        _hover={false}
                        leftIcon={<Box ml="0.5rem" pt="0.4rem">
                            <CloseIcon />
                        </Box>}
                    >
                        ΚΛΕΙΣΙΜΟ
                    </Button>
                </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    );
  }