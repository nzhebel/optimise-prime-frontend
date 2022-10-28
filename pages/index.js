import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import * as React from 'react';
import { Box } from '@mui/material'
import TopBar from '../components/TopBar.js'
import RecommendationTable from '../components/RecommendationTable';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar></TopBar>
      <RecommendationTable></RecommendationTable>
    </Box>
  )
}
