import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React from "react";

function ProfileMangments() {
  const currencies = [
    {
      value: "user",
      label: "User",
    },
    { value: "admin", label: "Admin" },
    { value: "Manger", label: "Manger" },
  ];

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" spacing={2}>
        <TextField sx={{ flex: 1 }} label="first name" variant="filled" />
        <TextField sx={{ flex: 1 }} label="Last name" variant="filled" />
      </Stack>

      <TextField id="filled-basic" label="email" variant="filled" />
      <TextField id="filled-basic" label="Contact Number" variant="filled" />
      <TextField id="filled-basic" label="Address 1" variant="filled" />
      <TextField id="filled-basic" label="Address 2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="user"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
        <Box sx={{textAlign: "right"}}>
          <Button variant="contained">Create New User</Button>
        </Box>
    </Box>
  );
}

export default ProfileMangments;
