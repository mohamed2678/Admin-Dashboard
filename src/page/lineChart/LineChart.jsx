import React from 'react'
import Line from './Line'
import { useTheme } from '@mui/material'



function LineChart() {
  const theme = useTheme()
  return (
    <Line />
  )
}

export default LineChart