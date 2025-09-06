import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";

function dashboard() {
  return (
    <div>
      <Box sx={{ textAlign: "right" }}>
        <Button sx={{ padding: "6px 8px" }} variant="contained" color="primary">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default dashboard;
