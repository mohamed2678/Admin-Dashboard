import React from 'react'
import { Box,  } from '@mui/material'
import Pie from './Pie'
import Header from '../../components/Header'

function PieChart() {


  return (
    <Box >
      <Header title="PIE CHART" subTitle="Simple Pie Chart" />
      <Pie />
    </Box>
  )
}

export default PieChart