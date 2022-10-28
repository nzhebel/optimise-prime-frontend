import React from 'react'

import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

const RecommendationTable = () => {
  return (
    <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="recommendation table">
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
                    key={row.instance}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.instance}
                        </TableCell>
                        <TableCell align="left">{row.type}</TableCell>
                        <TableCell align="left">{row.status}</TableCell>
                        <TableCell align="left">{row.recommendation}</TableCell>
                        <TableCell align="right">{row.savings}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

function createData(instance, type, status, recommendation, savings) {
    return { instance, type, status, recommendation, savings };
  }
  
  const rows = [
    createData('Workload 1', 'EC2.S', 'OK', '', 0),
    createData('Workload 2', 'EC2.L', 'Optimize', 'AWS Lambda', 1000),
    createData('Workload 3', 'Lambda', 'OK', '', 0)
  ];

export default RecommendationTable