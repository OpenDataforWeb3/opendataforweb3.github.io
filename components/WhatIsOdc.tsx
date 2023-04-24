import styles from "../styles/components/WhatIsOdc.module.css";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../utils/utils";

export const WhatIsOdc = () => {
  const ODCTextVariants = {
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
    hidden: { x: "30vw" },
  };

  const ODCImageVariants = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
    hidden: { y: "30vh" },
  };

  return (
    <div className={styles.container}>
      <div className={styles.whatIsOdc}>
        <motion.img
          src="illustrations/purple_glitter.svg"
          height="1000"
          width="1000"
          initial="hidden"
          whileInView="visible"
          variants={ODCImageVariants}
        />

        <motion.div
          className={styles.textContent}
          initial="hidden"
          whileInView="visible"
          variants={ODCTextVariants}
        >
          <h3>What is the OpenData Community ?</h3>
          <p>
            The OpenData Community, home of the Regen Rangers, is an open source
            DAO that emerged from Gitcoin in the Fall of 2022. We build upon our
            experience in defending public goods funding rounds to build
            algorithms and other software to fight Sybil attacks, wash trading,
            airdrop farming and other fraudsters while advocating for the use of
            decentralized technologies at the data layer.
          </p>

          <a href={NAV_LINKS["ABOUT"]} target="_blank">
            About Us &gt;
          </a>
        </motion.div>
      </div>
    </div>
  );
};
