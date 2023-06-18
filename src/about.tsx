import React from 'react'
import styles from '../styles/about-components/about.module.css'
import { motion } from "framer-motion";
import Image from 'next/image';


export default function About() {
  const boxHover = {
    scale: 1.05,
    y: 10,
  };

  const textVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    hidden: { opacity: 0 },
  };

  const variants = {
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
    hidden: { x: "30vw" },
  };


  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.item}>
          <h2>About odc</h2>
          <p>
            The OpenData Community is an open source community<br /> originally founded by
            Gitcoin as a part of their efforts to enable communities<br /> to fund their shared needs.
          </p>
        </div>
        <motion.img src="/illustrations/team.svg"
          height={550}
          width={550}
        />
      </div>
      <div className={styles.secBox}>
        <motion.img src="/illustrations/mission.svg"
          height={550}
          width={550}
        />
        <div className={styles.secItem}>
          <h2>Our mission</h2>
          <p>
            In ODC our mission is to protect web3, focusing on:<br />
            <span> &gt; <strong>Sybil resistence</strong></span> through data science and the development of useful algorithms and other approaches.<br />
            <span> &gt; <strong>Resisting recentralization </strong></span> and potential capture at the data layer.<br />
            If we collectively do not resist Sybil attacks then one of the real bright spots of web3 - the collective funding of public goods - could be captured by essentially criminal forces.
            Similarly if we continue to all take short cuts when accessing and analyzing blockchain data then we are adding vulnerability to the ecosystem right above the decentralized blockchains in the form of centralization.
          </p>
        </div>
      </div>
      <div className={styles.thirdBox}>
        <motion.div
          className={styles.thirdItem}
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          <h2>Our values</h2>
          <p>
            <span> &gt; openness
            </span> working in public and actively requesting input<br />
            <span>&gt; candor
            </span>  being direct and facts based<br />
            <span>&gt; inclusive
            </span>   making a particular effort to welcome and invite a breadth of perspectives<br />
            <span>&gt; initiative
            </span>  we are action oriented and respect and appreciate those that take on responsibility
          </p>
        </motion.div>
        <motion.img src="/illustrations/target.svg"
          height={400}
          width={400}
        />
      </div>
      <div className={styles.partners}>
        <div className={styles.partnersTitle}><h2>Partners</h2></div>
        <div className={styles.spons}>
          <a href='https://www.gitcoin.co/'>
            <motion.img
              src="images/gitcoin.svg"
              alt="gitcoin"
              height={100}
              width={100}
              whileHover={boxHover}

            /> </a>
          <a href='https://oceanprotocol.com/'>
            <motion.img
              src="images/os.svg"
              alt="oceanProtocol"
              height={100}
              width={100}
              whileHover={boxHover}
            /></a>
          <a href='https://trueblocks.io/'>
            <motion.img
              src="images/trueblocks.svg"
              alt="trueblocks"
              height={100}
              width={100}
              whileHover={boxHover}

            /></a>
          <a href='https://supermodular.xyz/'>
            <motion.img
              src="images/xyz.svg"
              alt="Supermodular.xyz"
              height="119"
              width="119"
              whileHover={boxHover}

            /></a>
          <a href='https://www.pokt.network/'>
            <motion.img
              src="images/pokt.svg"
              height="90"
              width="90"
              alt="poktNetwork"
              whileHover={boxHover}

            /></a>
        </div>
      </div>
      <motion.div className={styles.lastSec} initial="hidden"
        whileInView="visible"
         variants={textVariants}
      >
        <p>
          One of our projects is to collectively currate useful solutions that enable data analysts to find insights while remaining decentralized.  Your feedback and input into  <a href='https://github.com/OpenDataforWeb3/Landscape'> The Landscape </a>
          and all other materials we publish is hugely valuable -
          as are your stars on the repository and amplification on social media.
        </p>
      </motion.div>
    </div>


  )
}
