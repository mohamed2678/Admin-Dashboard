import * as React from "react";

import {rows, columns} from "./DataInvoices";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";






export default function AssistantWithDataSampling() {
  return (
    <Box sx={{ height: 800, width: "96%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        showToolbar

      />
    </Box>
  );
}
