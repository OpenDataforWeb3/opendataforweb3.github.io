import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function FutureCard({ title, src }) {
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
    <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      xs={12}
      sm={12}
      md={3}
      lg={3}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
      >
        <Card variant="elevation" sx={{ height: 280, width: 300 }}>
          <CardContent >
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Grid item >
                <Image
                  src={src}
                  alt='illustration'
                  height={130}
                  width={190} />
              </Grid>
              <Grid item xs container sx={{ display: 'flex', alignContent: 'center', textAlign: 'center', justifyContent: 'center' }}>
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