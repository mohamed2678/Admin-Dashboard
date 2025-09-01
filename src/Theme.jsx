export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
        }
      : {
          // palette values for dark mode
        }),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        },
        // Calendar-specific classes (make them theme-aware)
        '.demo-app': {
          color: theme.palette.text.primary,
        },
        '.demo-app-sidebar': {
          background: theme.palette.mode === 'light' ? '#eaf9ff' : '#071121',
          borderRight: `1px solid ${theme.palette.divider}`,
          color: theme.palette.text.primary,
        },
        '.demo-app-sidebar-section': {
          color: theme.palette.text.primary,
        },
        '.demo-app-main': {
          background: 'transparent',
          color: theme.palette.text.primary,
        },
        '.demo-app-sidebar h2': {
          color: theme.palette.text.primary,
        },
        '.demo-app-sidebar ul, .demo-app-sidebar li': {
          color: theme.palette.text.secondary,
        },
        '.fc': {
          color: theme.palette.text.primary,
        },
        'h2': {
          color: theme.palette.text.primary,
        },
        'li': {
          color: theme.palette.text.secondary,
        },
        'b': {
          color: theme.palette.text.primary,
        },
      }),
    },
  },
});