import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Text,
    Image,
  } from "@chakra-ui/react";
  import { ChevronDownIcon, ExternalLinkIcon,InfoIcon } from '@chakra-ui/icons';
  import { Menu, MenuButton, MenuList, MenuItem,Flex } from '@chakra-ui/react';
  import { NAV_ITEMS, SOURCES_MENU_ITEMS } from "../../config/navigationConfig";
  import { NavItem } from "./NavItem";
  import  {useNavigate} from "react-router-dom";
  import { ToolTipUnderConstruction } from "../ToolTipUnderConstruction";
  
  export function MenuDrawer({ isOpen, onClose }) {
    const navigate = useNavigate();
    const goToHomePage = () => {
      navigate("/");
      onClose();
    };
  
    return (
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent sx={{
          bg: "rgba(0, 10, 38, 0.7)",
          width: "100%",
          backdropFilter: "blur(20px)",
          minHeight: '100vh',
        }}>
          <DrawerCloseButton sx={{ zIndex: 9999 }} />
          <DrawerHeader fontWeight={800} opacity={1} textAlign={"center"} onClick={goToHomePage}>
            <Image
              draggable={false}
              src={'/logo.png'}
              w={{ base: "40px", md: "50px" }}
              marginInline={"auto"}
            />
          </DrawerHeader>
          <DrawerBody>
          <Flex
            direction="column"
            align="center"
            justify={"center"}
            width="80%"
            maxW="300px"
            gap={4} 
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
              
              <Menu borderRadius={8} isLazy autoSelect={false} placement="bottom" closeOnSelect={false}>
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
                    >
                      ΠΗΓΕΣ <ChevronDownIcon />
                    </MenuButton>
                    <MenuList borderRadius={8} bg='rgba(0, 10, 38, 1)' backdropFilter='blur(4px)' boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)" border="1px solid rgba(255, 255, 255, 0.15)">
                      {SOURCES_MENU_ITEMS.map((item) => (
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
  
              <Text position="absolute" bottom="5vh" fontWeight={200}>
                <InfoIcon pb="0.5" fontSize="18px" /> Σελίδα υπο κατασκευή
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  }