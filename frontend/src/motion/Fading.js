import {motion, useInView} from "framer-motion"
import { useRef } from "react";

const FadeInComponent = ({ children }) => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true }); 

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.15 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
};
export default FadeInComponent;