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
      fontWeight={isMobile ? "800" : "600"}
      paddingY={isMobile ? 2 : "4px 0"}
      width={isMobile ? "full" : "auto"}
      textAlign={isMobile ? "center" : "left"}
      color={isActive ? "brand.dark.secondary" : "brand.dark.text"}
      _hover={{ 
        color: "brand.dark.secondary", 
        cursor: "pointer",
        fontWeight: isMobile ? "800" : "600"
      }}
    >
      {item.label}
    </Text>
  );
};