import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React, { useEffect, useState } from 'react';
import { Box, Grid, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import TopBar from '../components/TopBar'
import RecommendationTable from '../components/RecommendationTable'
import KpiCard from '../components/KpiCard'
import { getRecommendation } from '../services/recommendation';

export default function Home() {
  const [recommendation, setRecommendation] = useState([]);
  const [savedEmissions, setSavedEmissions] = useState(0);
  const [optimisedInstances, setOptimisedInstances] = useState(0);
  const [savedCosts, setSavedCosts] = useState(0);

  useEffect(() => {
    let mounted = true;
    getRecommendation()
     .then(items => {
       if(mounted) {
         setRecommendation(items);
         setSavedEmissions(items.map(item => Math.round(item['service'].current['co2'] - item['service'].potential.base['co2']))
                                .reduce((result, item) => result + item, 0));
        setOptimisedInstances(items.length);
        setSavedCosts(items.map(item => item['service'].current['cost'] - item['service'].potential.base['cost'])
                                .reduce((result, item) => result + item, 0));
       }
     })
   return () => mounted = false;
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 2 }}>
        <TopBar></TopBar>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            	<KpiCard name="Saved Emissions" value={savedEmissions} unit={"kg/year"}></KpiCard>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <KpiCard name="Optimised Instances" value={optimisedInstances} unit={"Instances"}></KpiCard>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <KpiCard name="Saved Costs" value={savedCosts} unit={"€/hour"}></KpiCard>
          </Grid>
          <Grid item xs={2}></Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <RecommendationTable sx={{ padding: 20 }} recommendation={recommendation}></RecommendationTable>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#60ad5e',
      main: '#2e7d32',
      dark: '#005005',
      contrastText: '#ffffff',
    },
  },
});