import React from 'react'
import MediaCard from './MediaCard';
import { Grid, Typography } from '@mui/material';
import IconLego from '../../public/icons/IconLego';
import IconReview from '../../public/icons/IconReview';
import IconBarChart from '../../public/icons/IconBarChart';
import IconPieChart from '../../public/icons/IconPieChart';
import IconDashboardLine from '../../public/icons/IconDashboardLine';


export default function CurrentProjects() {
    const header = "Current sandbox projects";

    const content: Array<any> = [
        { title: "Sybil Scorer", link: "https://github.com/poupou-web3/sybil-scorer", src: <img src='images/sybil-scorer.svg' height={140} width={150} /> },
        { title: "Mirall0x", link: "https://github.com/OpenDataforWeb3/Mirall0x", src: <img src='images/mirall.svg' height={140} width={140} /> },
        { title: "GIS", link: "/main-project", src: <IconPieChart height={130} width={130} color={'#f57f02'} /> },
        { title: "Grants Review Dashboard", link: "https://github.com/OpenDataforWeb3-sandbox/Grant-Review-Dashboard", src: <IconReview height={130} width={130} color={'#713996'} /> },
        { title: "Datadex", link: "https://github.com/davidgasquez/datadex", src: <IconBarChart height={130} width={130} color={'#f57f02'} /> },
        { title: "Sybil Dashboard", link: "https://github.com/OpenDataforWeb3-sandbox/sybilscan-app", src: <IconDashboardLine height={130} width={130} color={'#713996'} /> },
        { title: "Lego Curration", link: "https://github.com/OpenDataforWeb3-sandbox/Lego-Curation", src: <IconLego height={130} width={130} color={'#f57f02'} /> },
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
