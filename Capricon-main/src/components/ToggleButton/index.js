import React from "react";
import { motion } from "framer-motion";
import "./ToggleButton.css";
import { FaMoon, FaSun } from "react-icons/fa";



const ToggleButton = ({ isOn, onToggleClick }) => {
  
  // initialize the customClassName according to the
  // state of the "isOn" using ternary operator
  const customClassName = `toggleSwitch ${isOn ? "on" : "off"}`;
  
  
  return (
    <motion.div animate className={customClassName} onClick={() => onToggleClick()}>
      <motion.div animate>

      {isOn ? <FaMoon className="toggleImg" style={{color: "white"}} /> : <FaSun className="toggleImg" style={{color: "#F9D71C"}} />}
  
      </motion.div>
    </motion.div>
  );
};
  
export default ToggleButton