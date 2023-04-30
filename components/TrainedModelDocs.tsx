import styles from "../styles/components/AIPoweredDocs.module.css"
import  Markprompt  from "./Markprompt";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../utils/utils";

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

  return (
    <div className={styles.container}>
      <div className={styles.AIPoweredDocs}>
        <motion.div
          className={styles.textContent}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          <h3>Need Quick Clarity?</h3>
          <h4>Ask Our ChatGPT trained model</h4>
          <p>
            You can ask any question you have regarding the OpenData Community.
            We’ve trained it on all of our written materials so far. So ask
            right here and receive accurate and helpful answers in real-time.
            Say goodbye to the frustration of sifting through endless pages of
            documentation. Ask it how to write a Lego - or how to get involved?
            Or even why we ODC exist.
          </p>

          <a href={NAV_LINKS["DOCS"]} target="_blank">
            Our Docs &gt;
          </a>
        </motion.div>

        <div className={styles.markPrompt}>
          <Markprompt
            projectKey="Jh6GT8DaEAdSfHfYyNAx55ebMswKgOXq"
            model="gpt-3.5-turbo"
          />
        </div>
      </div>
    </div>
  );
};
