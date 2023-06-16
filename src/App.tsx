import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./scenes/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./theme";
import Dashboard from "./scenes/dashboard";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Box width="100%" height="100%">
            <Navbar />
            <Box height="calc(100% - (58px + 1rem))">
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </Box>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
