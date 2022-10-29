import React from 'react'

import { Grid, Container, Box, Link } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <Box px={{ xs: 3, sm: 5}} py={{ xs: 3, sm: 5}}  bgcolor="text.secondary" color="white" className="sticky bottom-0">
        <Container maxWidth="lg">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={4}></Grid> 
                <Grid item xs={12} sm={4} textAlign="center">Powered by <img src="../public/BCG-Platinion-logo-new.svg" alt="BCG Platinion Logo"></img> </Grid> 
                <Grid item xs={12} sm={4}></Grid> 
            </Grid>  
        </Container>
    </Box>
  )
}
