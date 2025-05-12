import { background, Button, extendTheme } from "@chakra-ui/react";

// Extend the Chakra UI theme with your custom configuration
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set the default theme to dark mode
    useSystemColorMode: false, // Optionally set to true if you want to respect the system theme
  },
  colors: {
    brand: {
      light: {
        text: "#dceeff",
        primary: "#0031a1",
        secondary: "#e76a0f"
      },
      dark: {
        text: "#dceeff",
        primary: "#000d33",
        secondary: "#e76a0f"
      }
    },
  },
  breakpoints: {
    xs: "280px",
    sm: "320px",
    sm2: "480px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1600px",
    "3xl": "1920px",
  },
  fonts: {},
  fontSizes: {},
  styles: {
    global: {
      body: {
        backgroundColor: "brand.dark.primary", // Set background color for dark mode
        color: "brand.dark.text", // Set text color for dark mode
      },
     
    },
  },
  components: {
    Image:{
      baseStyle: {
        draggable: false,
        userSelect: "none",
    }},
    Button: {
      baseStyle: {
        variant:"solid",
        _hover: {
          fontweight: "bold",
          color: "brand.dark.secondary",
          backgroundColor: "brand.dark.text",
          transform: "scale(1.05)", 
          transition: "all 0.3s ease-in-out",
        },
      },
    },
  },
});

export default theme;
