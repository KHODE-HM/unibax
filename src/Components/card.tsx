import { motion } from "framer-motion";
import { useState } from "react";
import { ICardProps } from "../interfaces/cardProps";
const Cardsss: React.FC<ICardProps> =({id,title,subtitle,isSelected,onClick})=>{
  const [toggle, setToggle] = useState<boolean>(false);
  const handelClick = (): void => {
    setToggle(!toggle);
  
  };
  if (!toggle) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handelClick}
        style={{
          width: 300,
          height: 200,
          backgroundColor: "white",
          borderRadius: 10,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          overflow: "hidden",
          margin: 20,
        }}
      >
        <motion.div
          style={{
            width: "100%",
            height: "60%",
            background: "#333",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>{title}</h2>
        </motion.div>
        <motion.div
          style={{
            width: "100%",
            height: "40%",
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>{subtitle}</p>
        </motion.div>
      </motion.div>
    );
  }
  else{
    return (
      <motion.div
        style={{
          width: isSelected ? "100%" : 300,
          height: isSelected ? "80vh" : 200,
          background: "white",
          borderRadius: isSelected ? 0 : 10,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          margin: 20,
          position: "relative",
          // filter: isSelected ? "background:hidden" : "none",
          zIndex: isSelected ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.5 }}
        onClick={handelClick}
      >
        <div
          style={{
            width: "100%",
            height: "60%",
            background: "#fff",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>{title}</h2>
        </div>
        <div
          style={{
            width: "100%",
            height: "40%",
            background: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>{subtitle}</p>
        </div>
      </motion.div>
    );
  }
};
export default Cardsss;
