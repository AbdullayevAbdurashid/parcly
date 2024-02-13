"use client";
import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const MotionBox = motion(Box);

function BottomMenu({ menu, iconSize }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const handleItemClick = (index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };
  return (
    <MotionBox
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      position="fixed"
      bottom={0}
      width="100%"
      borderTop="1px solid #ccc"
    >
      <Flex
        justifyContent={"space-evenly"}
        alignItems={"center"}
        position="relative"
      >
        {menu &&
          menu.map((el, indx) => (
            <MotionBox
              key={indx}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleItemClick(indx)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: selectedItem === indx ? 1 : 0.7,
                y: 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <Link href={el.url}>
                {el.icon &&
                  React.cloneElement(el.icon, {
                    color: selectedItem === indx ? "#008f5b" : "inherit",
                  })}
              </Link>
            </MotionBox>
          ))}
      </Flex>
    </MotionBox>
  );
}

export default BottomMenu;
