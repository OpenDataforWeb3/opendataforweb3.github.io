import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import IconLightbulb from '../../public/icons/IconLightbulb';
import IconPeopleRoof from '../../public/icons/IconPeopleRoof';
import IconLightningChargeFill from '../../public/icons/IconLightningChargeFill';
import IconCodereview from '../../public/icons/IconReview';
import { Grid } from '@mui/material';
import styles from "../../styles/projects-styles/steps.module.css";
import { motion } from "framer-motion";

const steps = ['Be an ODC member in good standing',
  'Have a great idea for a project that is aligned with the ODC mission and values',
  'Indication of intent and capabilities',
  'ODC Jedi reviews Sandbox project for minimum requirements'];

export default function Steps() {
  const textVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
    hidden: { opacity: 0 },
  };
  return (
    <>
      <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h2' align='center'>Requirements to becoming a Sandbox Project</Typography>
      </Grid>
      <Grid item container sx={{ display: 'flex', justifyContent: 'center' }} >
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ fontSize: 70 }} color="secondary" variant='outlined'>
                <IconPeopleRoof />
              </TimelineDot>
              <TimelineConnector sx={{ height: 190 }} />
            </TimelineSeparator>
            <TimelineContent className={styles.title}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
              >{steps[0]}
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ fontSize: 70 }} color="secondary">  <IconLightbulb />
              </TimelineDot>
              <TimelineConnector sx={{ height: 190 }} />
            </TimelineSeparator>
            <TimelineContent className={styles.title}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
              >{steps[1]}
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ fontSize: 70 }} color="secondary" variant='outlined'><IconLightningChargeFill />
              </TimelineDot>
              <TimelineConnector sx={{ height: 190 }} />
            </TimelineSeparator>
            <TimelineContent className={styles.title}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
              >{steps[2]}
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ fontSize: 70 }} color="secondary">
                <IconCodereview />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent className={styles.title}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
              >{steps[3]}
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid >
    </>

  );
}