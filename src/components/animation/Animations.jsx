import { motion } from "framer-motion";

const FadeInX = ({
  children,
  delay = 0,
  duration = 0.5,
  side = 0,
  ...props
}) => (
  <motion.div
    initial={{ x: side, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{
      delay: delay,
      x: { type: "spring", stiffness: 60 },
      ease: "easeIn",
      duration: duration,
    }}
    {...props}
  >
    {children}
  </motion.div>
);

const FadeInY = ({ children, delay = 0, duration = 0.5, ...props }) => (
  <motion.div
    initial={{ y: 200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      delay: delay,
      y: { type: "spring", stiffness: 60 },
      ease: "easeIn",
      duration: duration,
    }}
    {...props}
  >
    {children}
  </motion.div>
);

export { FadeInY, FadeInX };
