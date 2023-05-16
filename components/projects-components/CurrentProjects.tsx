import React from 'react'
import MediaCard from './MediaCard';
import { Grid, Typography } from '@mui/material';
import IconLego from '../../public/icons/IconLego';
import IconCodereview from '../../public/icons/IconReview';
import IconDashboard from '../../public/icons/IconDashboard';
import IconDashboardLine from '../../public/icons/IconDashboardLine';


export default function CurrentProjects() {
    const header = "Current sandbox projects";

    const content: Array<any> = [
        { title: "Grants Review Dashboard", link: "https://github.com/OpenDataforWeb3-sandbox/Grant-Review-Dashboard", src: <IconCodereview height={130} width={130}  color={'#713996'}/> },
        { title: "Lego Curration", link: "https://github.com/OpenDataforWeb3-sandbox/Lego-Curation", src: <IconLego height={130} width={130} color={'#f57f02'} /> },
        { title: "Sybil Dashboard", link: "https://github.com/OpenDataforWeb3-sandbox/sybilscan-app", src:<IconDashboard height={130} width={130}  color={'#713996'} />  },
        { title: "Datadex", link: "https://github.com/davidgasquez/datadex", src:<IconDashboardLine height={130} width={130} color={'#f57f02'} /> },
    ];

    return (
        <Grid direction={'column'} container spacing={2}  >
            <Grid item container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h2'>{header}</Typography>
            </Grid>
            <Grid item container spacing={2}>
                {
                    content.map(item => <MediaCard title={item.title} link={item.link} src={item.src} key={item.link} />)
                }
            </Grid>
        </Grid>
    )
}
