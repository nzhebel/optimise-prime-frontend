import React from 'react'

import { Paper, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const RecommendationTable = () => {
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
                    {rows.map((row) => (
                        <TableRow 
                        hover
                        key={row.instance}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.instance}
                            </TableCell>
                            <TableCell align="left">{row.type}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                            <TableCell align="left">{row.recommendation}</TableCell>
                            <TableCell align="right">{row.savings.toLocaleString()}</TableCell>
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
                            <Typography>1,000</Typography>
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
    createData('Workload 1', 'EC2.S', 'OK', '', 0),
    createData('Workload 2', 'EC2.L', 'Optimize', 'AWS Lambda', 1000),
    createData('Workload 3', 'Lambda', 'OK', '', 0),
    createData('Workload 1', 'EC2.S', 'OK', '', 0),
    createData('Workload 2', 'EC2.L', 'Optimize', 'AWS Lambda', 1000),
    createData('Workload 3', 'Lambda', 'OK', '', 0),
    createData('Workload 1', 'EC2.S', 'OK', '', 0),
    createData('Workload 2', 'EC2.L', 'Optimize', 'AWS Lambda', 1000),
    createData('Workload 3', 'Lambda', 'OK', '', 0),
    createData('Workload 1', 'EC2.S', 'OK', '', 0),
    createData('Workload 2', 'EC2.L', 'Optimize', 'AWS Lambda', 1000),
    createData('Workload 3', 'Lambda', 'OK', '', 0)
  ];

export default RecommendationTable