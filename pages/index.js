import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
import { Box, Card, CardContent, Grid, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import TopBar from '../components/TopBar'
import RecommendationTable from '../components/RecommendationTable'
import KpiCard from '../components/KpiCard'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 2 }}>
        <TopBar></TopBar>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            	<KpiCard name="Saved Emissions" value="1,000"></KpiCard>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <KpiCard name="Optimised Instances" value="4"></KpiCard>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <KpiCard name="Highest Saving" value="1,000"></KpiCard>
          </Grid>
          <Grid item xs={2}></Grid>

          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <RecommendationTable sx={{ padding: 20 }}></RecommendationTable>
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