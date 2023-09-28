import React from 'react'
import styles from "../../styles/gis-component/ProjectInfo.module.css"
import IconCalender from '../../public/icons/IconCalender'
import { Card, Typography } from '@mui/material'

export default function ProjectInfo({ props }) {
  return (
    <div className={styles.container}>
      <div className={styles.subCon}>
        <Card variant='outlined' className={styles.con}>
          <div className={styles.date}>
            <IconCalender height={25} width={25} />
            <Typography>
              created on: {props.createdOn}
            </Typography>
          </div>
          <div className={styles.social}>
            <a href={props.github}>
              <img src='/socials/github.svg' height={30} width={30} />
            </a>
            <a href={props.discord}>
              <img src='/socials/discord.svg' height={30} width={30} />
            </a>
          </div>
        </Card>
        <Card variant='outlined' className={styles.desc} >
          <Typography variant='h4' sx={{ fontFamily: 'voice-activated', py: 3 }}>Description</Typography>
          <Typography color="text.secondary">
            {props.description}
          </Typography>
          <Typography variant='h4' sx={{ fontFamily: 'voice-activated', py: 3 }}>Goal</Typography>
          <Typography>{props.goal} </Typography>
          <Typography variant='h4' sx={{ fontFamily: 'voice-activated', py: 3 }}>Supported by</Typography>
          <Typography>{props.supporter} </Typography>
          <br />
        </Card>
        <Card variant='outlined' className={styles.conc}>
          <Typography color="text.secondary">
            {props.conclusion}
          </Typography>
          <div className={styles.inv}>
            <a href={props.discord}>
              <img src='/socials/discord.svg' height={30} width={30} />
            </a>
            <a href={props.github}>
              <img src='/socials/github.svg' height={30} width={30} />
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}
