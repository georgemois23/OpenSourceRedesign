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
import { location } from "react-router-dom";

export function MenuDrawer({ isOpen, onClose }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={"full"} >
            <DrawerOverlay />
            <DrawerContent  
             sx={{
                backgroundColor: 'rgba(0, 10, 38, 0.9)', // Transparent background color
                backdropFilter: 'blur(8px)', // Apply the blur effect
                WebkitBackdropFilter: 'blur(15px)', // For Safari
                minHeight: '100vh',
              }}>
                <DrawerCloseButton sx={{ zIndex: 9999 }} />
                <DrawerHeader fontWeight={800} opacity={1}  textAlign={"center"}>

                    OpenSource UoM
                </DrawerHeader>
                <DrawerBody>
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
                        <Link to="/" onClick={onClose}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                ΑΡΧΙΚΗ
                            </Text>
                        </Link>
                        <Link to="/blog" onClick={onClose}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/blog") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                BLOG
                            </Text>
                        </Link>
                        <Link to="/sponsors" onClick={onClose}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/sponsors") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                ΧΟΡΗΓΟΙ
                            </Text>
                        </Link>
                        <Link to="/register" onClick={onClose}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/register") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                ΕΓΓΡΑΦΗ
                            </Text>
                        </Link>
                        <Link to="/myuom" onClick={onClose}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/myuom") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                myUoM
                            </Text>
                        </Link>
                        <Link to="/resources" onClick={onClose}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/resources") ? "brand.dark.secondary" : "brand.dark.text"} 
                            >
                                ΠΗΓΕΣ
                            </Text>
                        </Link>
                        <Link to="/contact" onClick={onClose}>
                            <Text
                                width="full"
                                fontSize="lg"
                                fontWeight="800"
                                _hover={{
                                    textDecoration: "underline",
                                    cursor: "pointer",
                                }}
                                paddingY={3}
                                borderBottom="2px solid transparent"
                                color={isActive("/contact") ? "brand.dark.secondary" : "brand.dark.text"}
                            >
                                ΕΠΙΚΟΙΝΩΝΙΑ
                            </Text>
                        </Link>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}
