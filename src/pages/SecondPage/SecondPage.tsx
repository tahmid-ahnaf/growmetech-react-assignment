import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDetails } from "../../types";
import Component1 from '../../components/Component1/Component1';
import { Box } from '@mui/material';
import Component2 from '../../components/Component2/Component2';

const SecondPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userDetails: UserDetails | null = JSON.parse(localStorage.getItem('userDetails') || 'null');
        if (!userDetails || !userDetails.name || !userDetails.phone || !userDetails.email) {
            alert('You must enter your details before accessing this page.');
            navigate('/');
        }
    }, [navigate]);

    return (
        <Box>
            <h1>Welcome to the Second Page!</h1>
            <Component1></Component1>
            <Component2></Component2>
        </Box>
    
);
};

export default SecondPage;