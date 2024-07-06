import { createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
const Main = () => {
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </ThemeProvider>
    </div>
  );
};

export default Main;
