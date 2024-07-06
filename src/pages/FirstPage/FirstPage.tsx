import React, { useEffect } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { Box, DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useDialog } from "../../Context/DialogContext";
import { useLocation } from "react-router-dom";

const FirstPage: React.FC = () => {
  const { showDialog, setShowDialog } = useDialog();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) {
      setShowDialog(true);
    }
  }, [location, setShowDialog]);

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <Box sx={{ mx: "auto", maxWidth: "800px", mt: 8 }}>
      <Box
        sx={{
          textAlign: "center",
          typography: "body1",
          fontSize: "h3.fontSize",
          mb: 8,
        }}
      >
        Enter Your Details
      </Box>

      <UserForm />

      <Dialog
        open={showDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Warning"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You must enter your details before accessing the page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FirstPage;
