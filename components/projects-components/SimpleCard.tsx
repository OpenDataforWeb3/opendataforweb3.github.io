import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from 'next/image';
import styles from "../../styles/projects-styles/Card.module.css"
import { motion } from "framer-motion";

export default function SimpleCard({ title, src }) {
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
    <Grid item container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      xs={12}
      sm={12}
      md={5}
      lg={5} >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        <Card variant="outlined" sx={{ border: 1, borderColor: '#bf86f1' }} className={styles.myCard} >
          <CardContent >
            <Grid container spacing={3} className={styles.cardContent}>
              <Grid item>
                <Image
                  src={src}
                  alt='illustration'
                  height={140}
                  width={190} />
              </Grid>
              <Grid item xs container sx={{ textAlign: 'center' }}>
                <Typography color="text.secondary" >
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
}