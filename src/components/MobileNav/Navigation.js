import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [
  {
    id: "1",
    name: "Home",
    path: "/",
  },
  {
    id: "2",
    name: "Skills",
    path: "/skills",
  },
  {
    id: "3",
    name: "Projects",
    path: "/projects",
  },
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((item) => (
      <MenuItem menu={item} key={item.id} />
    ))}
  </motion.ul>
);
