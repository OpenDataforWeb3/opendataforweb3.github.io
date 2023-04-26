import styles from "../styles/components/Benefits.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

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
          <Image src="/illustrations/judge.svg" alt="judge" width= {140} height= {140}
 />
          <p>Role as a hackathon judge</p> 
        </motion.div>

        <motion.div className={styles.boxAsh} whileHover={boxHover}>
          <Image src="/illustrations/tooling.svg" alt="tooling" width= {140} height= {140}/>
          <p>Access to tooling and Infrastructure</p>
        </motion.div>

        <motion.div className={styles.box} whileHover={boxHover}>
          <Image src="/illustrations/governance.svg"  alt="governance" width= {140} height= {140}/>
          <p>Governance - full weight on votes</p>
        </motion.div>

        <motion.div className={styles.boxAsh} whileHover={boxHover}>
          <Image src="/illustrations/feedback.svg" alt="feedback" width= {140} height= {140}/>
          <p>Feedback from community via PRs, Discord</p>
        </motion.div>

        <motion.div className={styles.box} whileHover={boxHover}>
          <Image src="/illustrations/services.svg" alt="services" width= {140} height= {140} />
          <p>Potential access to professional service opportunities</p>
        </motion.div>

        <motion.div className={styles.boxAsh} whileHover={boxHover}>
          <Image src="/illustrations/badge.svg" alt="badge" width= {140} height= {140}/>
          <p>Earn The Regen Rangers Badge as you climb the ranks</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
