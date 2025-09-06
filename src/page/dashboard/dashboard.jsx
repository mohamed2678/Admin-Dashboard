import React from 'react'
import Row1 from './Row1'
import Row2 from './Row2'
import Row3 from './Row3'
import { Button } from '@mui/material'
import { DownloadOutlined } from '@mui/icons-material'


function dashboard() {
  return (
    <div>
      <Button variant="text" color="primary">
        <DownloadOutlined />
        Download Reports
      </Button>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  )
}

export default dashboard