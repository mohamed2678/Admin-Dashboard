import * as React from "react";

import { rows, columns } from "./DataInvoices";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Header from "../../components/Header";

export default function AssistantWithDataSampling() {
  return (
    <>
      <Header
        title="Invoices"
        subTitle="List of all invoices with their details"
      />
      <Box sx={{ height: 800, width: "96%", mx: "auto" }}>
        <DataGrid rows={rows} columns={columns} showToolbar />
      </Box>
    </>
  );
}
