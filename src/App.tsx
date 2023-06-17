import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./scenes/navbar";
import { theme } from "./theme";
import Dashboard from "./scenes/dashboard";

function App() {
  return (
    <div className="app">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box width="100%" height="100%">
          <Navbar />
          <Box height="calc(100% - (58px + 1rem))">
            <Dashboard />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
