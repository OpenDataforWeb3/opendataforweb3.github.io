import { SOCIAL_LINKS, NAV_LINKS } from "../utils/utils";
import styles from "../styles/components/Footer.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const boxHover = {
    scale: 1.05,
    y: 10,
  };
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <a href={SOCIAL_LINKS["twitter"]} target="_blank">
            <Image src="/socials/twitter_white.svg" alt="twitter" width= {40} height= {40}/>
          </a>

          <a href={SOCIAL_LINKS["github"]} target="_blank">
            <Image src="/socials/github_white.svg" alt="github" width= {40} height= {40} />
          </a>

          <a href={SOCIAL_LINKS["discord"]} target="_blank">
            <Image src="/socials/discord_white.svg" alt="discord" width= {40} height= {40}/>
          </a>
        </div>

        <div className={styles.navLinks}>
          <a href={NAV_LINKS["ABOUT"]}>About us</a>
          <a href={NAV_LINKS["BLOG"]}>Blog</a>
          <a href={NAV_LINKS["FORUM"]}>Forum</a>
          {/* <a href={NAV_LINKS["HACKATHON"]}>Hackathon</a> */}
        </div>

        <div className={styles.docsLinks}>
          <div className={styles.left}>
            <a href={NAV_LINKS["LANDSCAPE"]}>Landscape</a>
            <a href={NAV_LINKS["FAQ"]}>FAQ</a>
            <a href={NAV_LINKS["GLOSSARY"]}>Glossary</a>
          </div>

          <div className={styles.right}>
            <a href={NAV_LINKS["DATA_DICTIONARY"]}>Data Dictionary</a>
            <a href={NAV_LINKS["GET_INVOLVED"]}>Get Involved</a>
            <a href={NAV_LINKS["LEGOS"]}>Legos</a>
          </div>
        </div>
        <div className={styles.spons}>
          <div className={styles.partnersTitle}><h2>Supporters</h2></div>
          <a href='https://www.covalenthq.com/'>
            <motion.img
              src="images/covalent.png"
              height={150}
              width={180}
              alt="covalent"
              whileHover={boxHover}
            /></a>
          <a href='https://www.gitcoin.co/'>
            <motion.img
              src="images/gitcoin.svg"
              alt="gitcoin"
              height={50}
              width={50}
              whileHover={boxHover}
            /> </a>
          <a href='https://oceanprotocol.com/'>
            <motion.img
              src="images/oc-white.svg"
              alt="oceanProtocol"
              height={50}
              width={50}
              whileHover={boxHover}
            /></a>
          <a href='https://trueblocks.io/'>
            <motion.img
              src="images/trueblocks.svg"
              alt="trueblocks"
              height={50}
              width={50}
              whileHover={boxHover}
            /></a>
          <a href='https://supermodular.xyz/'>
            <motion.img
              src="images/xyz.svg"
              alt="Supermodular.xyz"
              height={50}
              width={50}
              whileHover={boxHover}
            /></a>
          <a href='https://www.pokt.network/'>
            <motion.img
              src="images/pokt.svg"
              height={40}
              width={40}
              alt="poktNetwork"
              whileHover={boxHover}
            /></a>
        </div>
      </div>
    </div>
  );
};
