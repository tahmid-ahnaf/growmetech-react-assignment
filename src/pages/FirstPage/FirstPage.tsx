import React from 'react';
import UserForm from '../../components/UserForm/UserForm';
import { Box } from '@mui/material';

const FirstPage: React.FC = () => {
    return (
        <Box sx={{ mx: 'auto', maxWidth: '800px', mt: 8}}>
            <Box sx={{textAlign:'center', typography: 'body1', fontSize: 'h3.fontSize', mb:8}}>Enter Your Details</Box>
            <UserForm />
        </Box>
    );
};

export default FirstPage;