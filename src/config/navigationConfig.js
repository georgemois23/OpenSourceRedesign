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
      label: "ΧΟΡΗΓΟΙ",
      path: "/sponsors",
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
    },
    {
      label: "README",
      path: "/readme",
      type: "internal",
      underConstruction: true,
    },
    {
      label: "ΕΠΙΚΟΙΝΩΝΙΑ",
      path: "/contact",
      type: "internal",
    },
  ];
  
  export const SOURCES_MENU_ITEMS = [
    {
      label: "Αποθετήριο Github",
      path: "https://github.com/open-source-uom",
      icon: <ExternalLinkIcon fontSize={14} ml={1} mb={1}/>,
      type: "external",
    },
    // {
    //   label: "Αποθετήριο Gitlab",
    //   path: "https://gitlab.com/opensourceuom",
    //   icon: <ExternalLinkIcon fontSize={14} ml={1} mb={1}/>,
    //   type: "external",
    // },
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