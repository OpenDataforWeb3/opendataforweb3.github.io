import React from 'react'
import { motion } from "framer-motion";
import styles from "../styles/components/Hackathon.module.css"
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

export default function Hackathon() {

  return (
    <div className={styles.box}>
      <div className={styles.heroImg}>
        <Box className={styles.heroTxt}>
          <span>
            <Typography variant='h1' className={styles.headerTxt}>REGEN RANGER
            </Typography>
            <Typography variant='h2' className={styles.subTxt}>HACKATHON</Typography>
            <Typography variant='h4'>
              April 25th - May 15th, 2023
            </Typography>
            <Typography variant='h4'>
              Use data analysis for good - Win $40k in bounties</Typography>
            <button className={styles.hackathonBtn}>
              <Link href={"https://app.buidlbox.io/opendata/regen-rangers-hack"}>
                JOIN NOW

              </Link>
            </button>
          </span>
        </Box>

      </div>
      <Grid container spacing={2} direction={"row"}
        sx={{
          pt: 8,
          display: "flex",
          alignContent: "center",
          justifyContent: "center", bgcolor: '#f8f7ff'
        }} >
        <Grid container className={styles.first}  item sx={{ justifyContent: "center", alignItems: "center", display: "flex", height: '75vh'}}>
          <Grid item sx={{ justifyContent: "center", alignItems: "center", display: "flex", textAlign: 'center',p:3 }}>

            <span>
              <Typography variant='h2' className={styles.txt}>PROTECT WEB3</Typography>

              <Typography sx={{ pb: 1 }}>
                Help protect web3 from fraudsters and the perils of centralization at the data layer, By:
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                Finding fraud in public goods funding.
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                Web3 Tool Discovery (resisting data recentralization).
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                Exposing DeFi and DAO fraud and manipulation.
              </Typography>

              <button className={styles.hackathonBtn}>
                <Link href={"/blog/regen-rangers-hackathon"}>
                  READ MORE
                </Link>
              </button>
            </span>

          </Grid>
          <Grid item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            sx={{
              mt: 1,
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}>
            <motion.img
              src="illustrations/badg.svg"
              height="300"
              width="400"
              initial="hidden"
              whileInView="visible"
            />
          </Grid>
        </Grid>

        <Grid item container className={styles.purple}
          sx={{
            mt: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}>
          <Grid item >
            <img
              src="illustrations/coin.svg"
              height="300"
              width="400"

            />
          </Grid>
          <Grid item xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ display: "flex", justifyContent: 'center', textAlign: 'center' }}
          >
            <div>
              <Typography variant='h2' className={styles.txt}>EARN PRIZES</Typography>
              <Typography>
                <strong>Up to $40,000 </strong>  in bounties, And
                <strong> other benefits, Including:</strong> Earning points towards qualification as a Regen Ranger, receiving on-chain recognition, and being invited to continue your project with the support of the OpenData Community.
              </Typography>
            </div>

          </Grid>

        </Grid>
        <Grid item container className={styles.partners}>
          <Grid item container sx={{ justifyContent: 'center', pt: 5 }}><Typography variant='h3' sx={{ pt: 4 }}>Partners</Typography></Grid>
          <Grid item container sx={{ display: "flex", justifyContent: 'space-evenly' }} >
            <img
              src="images/gitcoin.svg"
              alt="gitcoin"
            />
            <img
              src="images/os.svg"
              alt="oseanProtocol"
            />
            <img
              src="images/trueblocks.svg"
              alt="trueblocks"
            />
            <img
              src="images/xyz.svg"
              alt="Supermodular.xyz"
              height="119"
              width="119"
            />
            <img
              src="images/pokt.svg"
              height="90"
              width="90"
              alt="poktNetwork"
            />
          </Grid>
        </Grid>

        <Grid item container className={styles.gray}>

          <Grid item xs={12}
            sm={12}
            md={6}
            lg={6}>
            <Typography>
              With each hackathon, the OpenData Community improves its ability to protect web3 from fraudsters and from the risks of centralization at the data layer. In the upcoming Regen Rangers hackathon from April 25th through May 15th of 2023, the ODC will continue to provide useful analysis and tools while also furthering knowledge of how to use data decentralization technologies. And will introduce the Regen Rangers to the broader web3 ecosystem.
            </Typography>
          </Grid>
          <Grid item >
            <img
              src="images/data.svg"
            />
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.footerImg}>
        <div className={styles.footerTxt}>
          <span>


            <Typography className={styles.txt} sx={{ pt: 4 }} variant='h2'>
              Previous Hackathons
            </Typography>

            <Link href={"https://github.com/OpenDataforWeb3/hackathon/blob/main/October%202022%20-%20Open%20Data%20Science%20Hackathon.md"}>October 2022 - Open Data Science Hackathon</Link>
            <br />
            <Link href={"https://github.com/OpenDataforWeb3/hackathon/blob/main/January%202023%20-%20DataBuilders%20Hackathon.md"}>January 2023 - DataBuilders Hackathon</Link>
          </span>

        </div>
      </div>
    </div >


  )
}
