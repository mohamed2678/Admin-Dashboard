import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./GeoData";
import { geo } from "./world_countries";
import { Box, useTheme } from "@mui/material";

function GeographyCgart() {
  const theme = useTheme();

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "#ffffff",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: theme.palette.text.primary,
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: theme.palette.text.primary,
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: theme.palette.text.primary,
            itemOpacity: 0.85,
            symbolSize: 18,
          },
        ]}
      />
    </Box>
  );
}

export default GeographyCgart;
