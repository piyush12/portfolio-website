import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MobileMenuContext } from ".";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ menu }) => {
  const mobileContext = React.useContext(MobileMenuContext);
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={menu.path} onClick={() => mobileContext.toggleOpen()}>
        {menu.name}
      </Link>
    </motion.li>
  );
};
