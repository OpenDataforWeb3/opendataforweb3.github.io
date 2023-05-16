import React from 'react'
import { Grid, Typography } from '@mui/material';
import SimpleCard from './SimpleCard';
import FutureCard from './FutureCard';


export default function List({ header, content, simple }) {

  return (
    <Grid container item sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
      <Grid container item sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h2' >{header}
        </Typography>
      </Grid>
      <Grid container spacing={3} item sx={{ justifyContent: 'center', display: 'flex' ,flexWrap:'wrap'}}>
        {
          simple ?
            content.map((item, i) =>
              <SimpleCard key={i} title={item.text} src={item.src} />
            ) :
            content.map((item, i) =>
              <FutureCard key={i} title={item.text} src={item.src} />
            )
        }
      </Grid>
    </Grid>
  )
}
