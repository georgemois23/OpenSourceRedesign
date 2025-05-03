import { Text } from "@chakra-ui/react";
import { ToolTipUnderConstruction } from "../ToolTipUnderConstruction";
import { useLocation, useNavigate } from "react-router-dom";

export const NavItem = ({ item, onClose, isMobile = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === item.path;

  const handleClick = () => {
    if (item.type === "external") {
      window.open(item.path, "_blank");
    } else {
      navigate(item.path);
    }
    if (onClose) onClose();
  };

  if (item.underConstruction) {
    return (
      <Text onClick={handleClick}>
        <ToolTipUnderConstruction where={item.label} />
      </Text>
    );
  }

  return (
    <Text
    onClick={handleClick}
    fontSize={isMobile ? "lg" : "md"}
    fontWeight={isActive ? "bold" : isMobile ? "800" : "600"}
    py={isMobile ? 2 : 1}
    px={isActive ? 3 : 0}
    width={isMobile ? "full" : "auto"}
    textAlign={isMobile ? "center" : "left"}
    borderRadius="lg"
    transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
    color={isActive ? "white" : "brand.dark.text"}
    bg={isActive ? "#000d33" : "transparent"}  // Deep blue active bg
    boxShadow={isActive ? "0 0 8px rgba(0, 80, 200, 0.1)" : "none"}  // Reduced glow
    textShadow={isActive ? "0 0 4px rgba(100, 180, 255, 0.2)" : "none"}  // Softer text glow
    border={isActive ? "1px solid rgba(100, 180, 255, 0.10)" : "1px solid transparent"}
    _hover={{
      color: !isActive ? "brand.dark.secondary" : "white",
      transform: !isActive ? "translateY(-2px) scale(1.02)" : "none",
      textDecoration: "none",
      cursor: "pointer",
    }}
    _active={{
      transform: "scale(0.98)",
      bg: "#000d33",  // Ensures deep blue stays on click
      boxShadow: "0 0 10px rgba(0, 80, 200, 0.25)",  // Stronger glow on press
    }}
    userSelect="none"
    letterSpacing="-0.025em"
    willChange="transform, box-shadow"
    style={{
      WebkitTapHighlightColor: "transparent",
    }}
>
    {item.label}
</Text>
  
  );
};