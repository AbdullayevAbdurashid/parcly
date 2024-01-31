import { Container } from "@chakra-ui/react";
import React from "react";
import BottomMenu from "./MobileLayout";
import { menuIcons } from "@/constants/navigation";
function MobileLayout({ children, noMenu }) {
  return (
    <Container justifyContent={"center"} p={0} maxW={"full"}>
      {children} {!noMenu && <BottomMenu menu={menuIcons} />}
    </Container>
  );
}

export default MobileLayout;
