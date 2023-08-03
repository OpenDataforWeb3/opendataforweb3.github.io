import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { motion } from "framer-motion";
import styles from "../../styles/projects-components/Card.module.css"

export default function MediaCard({ title, link, src }) {
    const boxHover = {
        scale: 1.05,
        y: 10,
    };
    return (
        <Grid item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}
        >
            <motion.div whileHover={boxHover} className={styles.projectsCard} >

                <Card >
                    <Link href={link} >
                        <CardContent className={styles.projectsCardContent}>
                            {src}
                            <Typography variant="h5" sx={{ py: 3 }}>
                                {title}
                            </Typography>

                        </CardContent>
                    </Link>
                </Card>
            </motion.div>

        </Grid>

    );
}