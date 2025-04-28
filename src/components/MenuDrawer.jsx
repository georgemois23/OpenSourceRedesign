import { Link, useLocation } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    Text,
    useColorModeValue,
    Button
} from "@chakra-ui/react";
import { location,useNavigate } from "react-router-dom";
import { ToolTipUnderConstruction } from "./ToolTipUnderConstruction";
import {InfoIcon,ExternalLinkIcon,ChevronDownIcon} from '@chakra-ui/icons';
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


export function MenuDrawer({ isOpen, onClose }) {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const goToHomePage = () => {
        navigate("/");
        onClose();
    };
    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={"full"} >
            <DrawerOverlay />
            <DrawerContent  
            //  sx={{
            //     backgroundColor: 'rgba(0, 10, 38, 0.97)', // Transparent background color
            //     backdropFilter: 'blur(8px)', // Apply the blur effect
            //     WebkitBackdropFilter: 'blur(15px)', // For Safari
            //     minHeight: '100vh',
            //   }}>
                sx={{
                    bg:"rgba(0, 10, 38, 0.7)",
                 width:"100%",
                    backdropFilter:"blur(20px)",
                    minHeight: '100vh',
                }}>

                <DrawerCloseButton sx={{ zIndex: 9999 }} />
                <DrawerHeader fontWeight={800} opacity={1}  textAlign={"center"} onClick={goToHomePage}>

                    OpenSource UoM
                </DrawerHeader>
                <DrawerBody >
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        color={useColorModeValue("brand.light.text", "brand.dark.text")}
                        paddingX={8}
                        height="80%"  // Make sure the content takes up the full height
                        fontWeight="800"
                    >
                        <Text onClick={()=> {navigate("/"); onClose(); }}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                _hover={{
                                    cursor: "pointer",
                                }}
                                color={isActive("/") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                ΑΡΧΙΚΗ
                            </Text>
                        </Text>
                        <Text onClick={()=> {navigate("/blog"); onClose(); }}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                marginInline={"auto"}
                                
                                color={isActive("/blog") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                <ToolTipUnderConstruction where={'BLOG'} />
                            </Text>
                        </Text>
                        <Text onClick={()=> {navigate("/sponsors"); onClose(); }}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                _hover={{
                                    cursor: "pointer",
                                }}
                                color={isActive("/sponsors") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                ΧΟΡΗΓΟΙ
                            </Text>
                        </Text>
                        <Text onClick={()=> {navigate("/register"); onClose(); }}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/register") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                ΕΓΓΡΑΦΗ
                            </Text>
                        </Text>
                        <Text onClick={() => {window.open('https://my.uom.gr/','_blank'); onclose();}}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                            >
                                myUoM
                            </Text>
                        </Text>
                        <Text>
                        <Menu borderRadius={8}  isLazy autoSelect={false} placement="bottom"  closeOnSelect={false} >
                          {({ isOpen }) => (
                            <>
                              <MenuButton
          as={Text}  // <--- This is the magic trick
          width="full"
          fontSize="lg"
          fontWeight="800"
          paddingY={3}
          ml={1}
          textAlign={"center"}
          borderBottom="2px solid transparent"
          color="brand.dark.text"
          _hover={{
            cursor: "pointer",
          }}
        >
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
                                ><ToolTipUnderConstruction where={'Βασικές εντολές LINUX'} />  </MenuItem>
                                
                              </MenuList>
                            </>
                          )}
                        </Menu>
                        </Text>
                        <Text onClick={()=> {navigate("/readme"); onClose(); }}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/resources") ? "brand.dark.secondary" : "brand.dark.text"} 
                            >
                                {/* README */}
                                <ToolTipUnderConstruction where={'README'} />
                            </Text>
                        </Text>
                        <Text onClick={()=> {navigate("/contact"); onClose(); }}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/contact") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                ΕΠΙΚΟΙΝΩΝΙΑ
                            </Text>
                        </Text>
                        <Text position={'absolute'} bottom={"10vh"} fontWeight={200}> <InfoIcon pb={'0.5'} fontSize={'18px'} /> Σελίδα υπο κατασκευή
                        </Text>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
