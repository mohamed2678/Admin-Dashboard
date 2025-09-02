import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material'
function BarChart() {

const data =  [
  {
    "country": "egypt",
    "hot dog": 186,
    "burger": 124,
    "sandwich": 160,
    "kebab": 194,
    "fries": 106,
    "donut": 6
  },
  {
    "country": "soudia",
    "hot dog": 59,
    "burger": 89,
    "sandwich": 70,
    "kebab": 116,
    "fries": 139,
    "donut": 129
  },
  {
    "country": "spain",
    "hot dog": 20,
    "burger": 134,
    "sandwich": 24,
    "kebab": 192,
    "fries": 8,
    "donut": 89
  },
  {
    "country": "germany",
    "hot dog": 163,
    "burger": 35,
    "sandwich": 171,
    "kebab": 45,
    "fries": 43,
    "donut": 6
  },
  {
    "country": "USA",
    "hot dog": 151,
    "burger": 35,
    "sandwich": 156,
    "kebab": 157,
    "fries": 100,
    "donut": 300
  },
  {
    "country": "canada",
    "hot dog": 199,
    "burger": 93,
    "sandwich": 162,
    "kebab": 45,
    "fries": 200,
    "donut": 172
  },
  {
    "country": "france",
    "hot dog": 194,
    "burger": 34,
    "sandwich": 2,
    "kebab": 143,
    "fries": 190,
    "donut": 186
  }
]






  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveBar /* or Bar for fixed dimensions */
        data={data}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        groupMode="grouped"
        labelSkipWidth={12}
        labelSkipHeight={12}
        borderRadius={6}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 120,
                itemsSpacing: 3,
                itemWidth: 100,
                itemHeight: 16
            }
        ]}
        axisBottom={{ legend: 'country', legendOffset: 32 }}
        axisLeft={{ legend: 'food', legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    />
    </Box>
  )
}

export default BarChart