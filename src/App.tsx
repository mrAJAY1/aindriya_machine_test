import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./scenes/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./theme";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Box width="100%" height="100%">
            <Navbar />
            <Routes>
              <Route path="/" element={<div>dashboard</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
