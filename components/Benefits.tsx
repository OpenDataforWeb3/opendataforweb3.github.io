import styles from "../styles/components/Benefits.module.css";
import { motion } from "framer-motion";

export const Benefits = () => {
  const textVariants = {
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
    hidden: { x: "30vw" },
  };

  const boxHover = {
    scale: 1.05,
    y: 10,
  };

  return (
    <div className={styles.container}>
      <h2>Benefits Of Becoming A Regen Ranger</h2>
      <motion.div
        className={styles.benefits}
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        <motion.div className={styles.box} whileHover={boxHover}>
          <img src="illustrations/judge.svg" />
          <p>Role as a hackathon judge</p>
        </motion.div>

        <motion.div className={styles.boxAsh} whileHover={boxHover}>
          <img src="illustrations/tooling.svg" />
          <p>Access to tooling and Infrastructure</p>
        </motion.div>

        <motion.div className={styles.box} whileHover={boxHover}>
          <img src="illustrations/governance.svg" />
          <p>Governance - full weight on votes</p>
        </motion.div>

        <motion.div className={styles.boxAsh} whileHover={boxHover}>
          <img src="illustrations/feedback.svg" />
          <p>Feedback from community via PRs, Discord</p>
        </motion.div>

        <motion.div className={styles.box} whileHover={boxHover}>
          <img src="illustrations/services.svg" />
          <p>Potential access to professional service opportunities</p>
        </motion.div>

        <motion.div className={styles.boxAsh} whileHover={boxHover}>
          <img src="illustrations/badge.svg" />
          <p>Earn The Regen Rangers Badge as you climb the ranks</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
