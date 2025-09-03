import React from 'react'
import { ResponsivePie } from '@nivo/pie'


const data = [
  {
    "id": "scala",
    "label": "scala",
    "value": 122,
    "color": "hsl(162, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 444,
    "color": "hsl(233, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 484,
    "color": "hsl(333, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 264,
    "color": "hsl(236, 70%, 50%)"
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 127,
    "color": "hsl(8, 70%, 50%)"
  }
]

function PieChart() {
  return (
    <div>
       <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
    </div>
  )
}

export default PieChart