import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { useForm } from "react-hook-form";

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regPhone =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

const currencies = [
  {
    value: "user",
    label: "User",
  },
  { value: "admin", label: "Admin" },
  { value: "Manger", label: "Manger" },
];

function ProfileMangments() {

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });


  const reset = () => {
    document.querySelector("form").reset();
  };

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };


  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("submitted");
    handleClick({ vertical: "top", horizontal: "right" })();
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" spacing={2}>
        <TextField
          error={errors.firstName}
          helperText={
            errors.firstName && "First name is required & min 3 charachters"
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="first name"
          variant="filled"
        />

        <TextField
          error={errors.lastname}
          helperText={
            errors.lastname && "Last name is required & min 3 charachters"
          }
          {...register("lastname", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={errors.email}
        helperText={errors.email && "Please enter a valid email address"}
        {...register("email", { required: true, pattern: regEmail })}
        id="filled-basic"
        label="email"
        variant="filled"
      />
      <TextField
        error={errors.phone}
        helperText={errors.phone && "please enter a valid phone number"}
        {...register("phone", { required: true, pattern: regPhone })}
        id="filled-basic"
        label="Contact Number"
        variant="filled"
      />
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
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
        >
          Create New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="User Created Successfully"
          key={vertical + horizontal}
          autoHideDuration={3000}
          sx={{ mt: 3 }}
        />
      </Box>
    </Box>
  );
}

export default ProfileMangments;
