import React from 'react'

import { Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const RecommendationTable = (props) => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer  sx={{ height: 600 }}>
            <Table stickyHeader sx={{ minWidth: 650 }} aria-label="recommendation table">
                <TableHead>
                    <TableRow>
                        <TableCell>Instance</TableCell>
                        <TableCell align='left'>Type</TableCell>
                        <TableCell align='left'>Status</TableCell>
                        <TableCell align='left'>Recommendation</TableCell>
                        <TableCell align='right'>Savings (in metric tons)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.recommendation.map((row) => (
                        <TableRow 
                        hover
                        key={row['service']}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row['service'].current.Service}
                            </TableCell>
                            <TableCell align="left">{row['service'].current['Service']}</TableCell>
                            <TableCell align="left">{row['service'].current['instance type']}</TableCell>
                            <TableCell align="left">{row['service'].potential.base['Service']} - {row['service'].potential.base['instance type']}</TableCell>
                            <TableCell align="right">{Math.round(row['service'].current['co2'] - row['service'].potential.base['co2'])}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography>Total</Typography>
                        </TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="right">
                            <Typography>
                                {props.recommendation
                                    .map(item => Math.round(item['service'].current['co2'] - item['service'].potential.base['co2']))
                                    .reduce((result, item) => result + item, 0)
                                }
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </Paper>
  )
}

function createData(instance, type, status, recommendation, savings) {
    return { instance, type, status, recommendation, savings };
  }
  
  const rows = [
    createData('Workload 1', 'EC2.S', 'OK', '', 0),
    createData('Workload 2', 'EC2.L', 'Optimize', 'AWS Lambda', 1000),
    createData('Workload 3', 'Lambda', 'OK', '', 0),
  ];

export default RecommendationTable