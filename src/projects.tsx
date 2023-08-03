import React from 'react'
import styles from "../styles/projects-components/Projects.module.css"
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import CurrentProjects from '../components/projects-components/CurrentProjects';
import List from '../components/projects-components/List';
import Steps from '../components/projects-components/Steps';
import { motion } from "framer-motion";

export default function Projects() {
  const header = "Benefits to being a Sandbox Project";
  const content = [
    { text: "No cost inclusion in hackathons - such as bounties that include best contributions to Sandbox projects", src: "/illustrations/online.svg" },
    { text: "Ongoing business development and awareness assistance via public and private conversations", src: "/illustrations/asses.svg" },
    { text: "No cost invites as a speaker in our series of Twitter spaces", src: "/illustrations/speaker.svg" },
    { text: "Premium real estate in the ODC Discord channel for communications", src: "/illustrations/media.svg" },
    { text: "Optional use of the ODC Sandbox repository to hold your code and documentation", src: "/illustrations/repo.svg" },
    { text: "Ability to build on top of the ODC community of open data", src: "/illustrations/building.svg" },
    { text: `Mentoring on agile software development practices, Github CICD, Github project management tools, and how to use Git with Github repositories.`, src: "/illustrations/agile.svg" }
  ];
  const title = "Future Sandbox Teams support may include";
  const items = [
    { text: "Grants program", src: "/illustrations/program.svg" },
    { text: "Governance or metagovernance assistance", src: "/illustrations/gover.svg" },
    { text: "Smart contract audits", src: "/illustrations/contract.svg" },
    { text: "Other launch assistance", src: "/illustrations/showSupport.svg" }
  ];

  return (
    <div className={styles.box}>
      <Grid className={styles.content} container >
        <Grid container className={styles.hero} >
          <Grid item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            className={styles.txt} sx={{
              pt: 4,
            }}>
            <span>
              <Typography variant="h1">
                SandBox Projects
              </Typography>
              <Typography sx={{ pb: 5, fontSize: 24 }}>
                projects that are supported by the OpenData community
              </Typography>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link className={styles.heroButton} href={"https://forum.opendatacommunity.org/t/sandbox-project-proposal-v2/40"}  >
                  SUBMIT
                </Link>
              </motion.button>

            </span>
          </Grid>
          <Grid item xs
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              padding: 3,
            }}>
            <Image
              height={500}
              width={900}
              alt="growing sprouts"
              src="/illustrations/grow.svg"
            />
          </Grid>
        </Grid>
        <Grid item container sx={{ my: 6, py: 6 }} >
          <Grid item container sx={{ my: 9, py: 9 }} className={styles.currentProjects} >
            <CurrentProjects />
          </Grid>
        </Grid>
        <Grid item container sx={{ my: 9, py: 9 }}>
          <List content={content} header={header} simple={true} />
        </Grid>
        <Grid item container sx={{ my: 9, py: 9 }}>
          <Steps />
        </Grid>
        <Grid item container sx={{ my: 9, py: 9 }}>
          <List content={items} header={title} simple={false} />
        </Grid>
      </Grid>
    </div >
  )
}
