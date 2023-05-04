import styles from "../styles/components/AIPoweredDocs.module.css"
import Markprompt from "./Markprompt";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../utils/utils";
import Image from 'next/image';

export const TrainedModelDocs = () => {
  const textVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0 },
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
      <div className={styles.AIPoweredDocs}>
        <motion.div
          className={styles.textContent}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          <p>
            Take a look at our resources - community contributed FAQs, wikis, repositories and more.<br></br>
            If you have questions about how to find and prevent Sybils and other fraudsters - and how to decentralize your data stack - please take a look.
          </p>
          <a href={NAV_LINKS["DOCS"]} target="_blank">
            View Docs &gt;
          </a>
        </motion.div>
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={ODCImageVariants}
          alt={"docs"}
          src="/illustrations/docs.svg"
        />
        {/* <div className={styles.markPrompt}>
          <Markprompt
            projectKey="3LzTRVc4BpEB9tHVWGIQIjWY8AHTPJVa"
            model="gpt-3.5-turbo"
          />
        </div> */}
      </div>
    </div>
  );
};
