import React from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { getDesignTokens } from "./Theme";
import { Box, CssBaseline, Typography } from "@mui/material";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);


// dark mode change 
  const [mode, setMode] = React.useState(
     Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <TopBar
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            setMode={setMode}
          />
          <SideBar open={open} handleDrawerClose={handleDrawerClose} />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Typography sx={{ marginBottom: 2 }}>
              gelgl abo glagel
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
