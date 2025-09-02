import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./bar";
function BarChart() {
  const theme = useTheme();
  
  return (
    <Bar />
  );
}

export default BarChart;
