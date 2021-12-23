import React from "react";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaUserAlt />,
    cName: "nav-text",
  },
  {
    title: "Services",
    path: "/services",
    icon: <FaIcons.FaTools />,
    cName: "nav-text",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <FaIcons.FaRegImages />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaEnvelope />,
    cName: "nav-text",
  },
];
