import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetails } from "../../types";

const UserForm = () => {

    const [userDetails, setUserDetails] = useState<UserDetails>({ name: '', phone: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSubmit = () => {
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        navigate('/second');
    };
  return (

    <Box
          sx={{ mx: 'auto', maxWidth: '800px' }}
    >
      <Box
        component="form"
        display="flex"        
        gap={4}
        noValidate
        autoComplete="off"
        
      >
        <TextField label="Name" name="name" value={userDetails.name} onChange={handleChange} required variant="outlined"/>       
        <TextField label="Phone" name="phone" value={userDetails.phone} onChange={handleChange} required />
        <TextField label="Email" name="email" value={userDetails.email} onChange={handleChange} required />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
      </Box>
    </Box>
      
  );
};

export default UserForm;
