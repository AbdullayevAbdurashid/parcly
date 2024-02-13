"use client";

import { Container } from "@chakra-ui/react";
import React from "react";
import BottomMenu from "./menu";
import { menuIcons } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import Header from "../Header";
function MobileLayout({ children }) {
  const pathnames = ["/login", "/register", "/"];
  const noMenu = pathnames.includes(usePathname());
  return (
    <Container justifyContent={"center"} p={0} maxW={"full"}>
      <Header></Header>
      {children}
      {!noMenu && <BottomMenu menu={menuIcons} />}
    </Container>
  );
}

export default MobileLayout;
