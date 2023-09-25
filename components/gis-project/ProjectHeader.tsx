import React from 'react';
import ParticlesComponent from './ParticlesComponent';
import styles from "../../styles/gis-component/ProjectHeader.module.css";
import { Typography } from '@mui/material';


export default function ProjectHeader({ title, subTitle }) {
  return (
    <div>
      <div className={styles.particlesCon}>
        <Typography variant='h1' sx={{ fontFamily: 'ricky!important' }} className={styles.headerTxt}>{title}</Typography>
        <ParticlesComponent />
      </div>
      <div className={styles.sub} style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h3' sx={{ fontFamily: 'voice-activated', pb: 1, pt: 9 }}>{subTitle}</Typography>
      </div>
    </div>

  )
}
