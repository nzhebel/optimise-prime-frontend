import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

export default function KpiCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{backgroundColor: '#60ad5e', color: 'white'}}>
        <Grid container>
          <Grid item xs={2}>
            <EnergySavingsLeafIcon></EnergySavingsLeafIcon>
          </Grid>
          <Grid item xs={10}>
            <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
              {props.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={5} textAlign="right">
            <Typography sx={{ fontSize: 18 }} color="white">
              {props.value}
            </Typography>
          </Grid>
          <Grid item xs={7} textAlign="right">
            <Typography sx={{ fontSize: 18 }} color="white">
              {props.unit}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}