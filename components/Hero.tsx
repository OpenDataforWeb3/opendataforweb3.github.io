import styles from "../styles/components/Hero.module.css";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../utils/utils";

export const Hero = () => {
  const heroImgVariants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hidden: {
      y: "-30vh",
    },
  };

  const heroTextVariants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
    hidden: { y: "-30vh" },
  };

  return (
    <div className={styles.hero}>
      <motion.img
        initial="hidden"
        whileInView="visible"
        variants={heroImgVariants}
        whileHover={{
          y: -30,
          x: -20,
        }}
        src="illustrations/hero.svg"
      />

      <motion.div
        className={styles.textContent}
        initial="hidden"
        whileInView="visible"
        variants={heroTextVariants}
      >
        <h2>
          The <span> OpenData </span>Community
        </h2>
        <p>
          The OpenData Community protects web3 from fraudsters and the risks of
          centralization at the data layer.
        </p>

        <a href={NAV_LINKS["WIKI"]} className={styles.heroButton}>
          Get Involved &gt;
        </a>
      </motion.div>
    </div>
  );
};
