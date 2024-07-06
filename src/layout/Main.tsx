import { createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
const Main = () => {
  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <Outlet></Outlet>
      </ThemeProvider>
    </div>
  );
};

export default Main;
