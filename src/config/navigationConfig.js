import { ExternalLinkIcon } from "@chakra-ui/icons";
export const NAV_ITEMS = [
    {
      label: "ΑΡΧΙΚΗ",
      path: "/",
      type: "internal",
    },
    {
      label: "BLOG",
      path: "/blog",
      type: "internal",
    //   underConstruction: true,
    },
    {
      label: "EVENTS",
      path: "/events",
      type: "internal",
    },
    
    {
      label: "ΕΓΓΡΑΦΗ",
      path: "/register",
      type: "internal",
    },
    {
      label: "myUoM",
      path: "https://my.uom.gr/",
      type: "external",
      icon: <ExternalLinkIcon fontSize={14} ml={1} mb={1}/>,
    },
    {
      label: "README",
      path: "/readme",
      type: "internal",
    },
    {
      label: "ΕΠΙΚΟΙΝΩΝΙΑ",
      path: "/contact",
      type: "internal",
    },
    // {
    //   label: "ΧΟΡΗΓΟΙ",
    //   path: "/sponsors",
    //   type: "internal",
    // },
    
  ];
  
  export const SOURCES_MENU_ITEMS = [
    {
      label: "Αποθετήριο Github",
      path: "https://github.com/open-source-uom",
      icon: <ExternalLinkIcon fontSize={14} ml={1} mb={1}/>,
      type: "external",
    },
    {
      label: "Χορηγοί",
      path: "/sponsors",
      type: "internal",
    },
    {
      label: "Βίντεο",
      path: "/videos",
      type: "internal",
      // icon: <ExternalLinkIcon fontSize={14} ml={1} mb={1}/>,
    },
    {
      label: "Βασικές εντολές LINUX",
      path: "/linux",
      type: "internal",
    },
  ];