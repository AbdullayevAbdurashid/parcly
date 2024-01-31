"use client";
import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { PiPlus } from "react-icons/pi";
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
      p={4}
      borderTop="1px solid #ccc"
    >
      <Flex justifyContent={"space-between"} position="relative">
        <MotionBox
          position="absolute"
          borderRadius={"100%"}
          zIndex={"-1"}
          top={"-23%"}
          left={selectedItem !== null ? `${selectedItem * 22.1}%` : "5%"}
          width="60px"
          height="60px"
          background="primary.300"
          animate={{
            left: selectedItem !== null ? `${selectedItem * 22.3}%` : "10%",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        />
        {/* Menu Items */}
        {menu &&
          menu.map((el, indx) => (
            <MotionBox
              key={indx}
              ml={4}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
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
                    color: selectedItem === indx && "white",
                  })}
              </Link>
            </MotionBox>
          ))}
      </Flex>
    </MotionBox>
  );
}

export default BottomMenu;
