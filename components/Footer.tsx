import { SOCIAL_LINKS, NAV_LINKS } from "../utils/utils";
import styles from "../styles/components/Footer.module.css";
import Image from "next/image";

export default function Footer(){
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
          <a href={NAV_LINKS["HACKATHON"]}>Hackathon</a>
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
      </div>
    </div>
  );
};
