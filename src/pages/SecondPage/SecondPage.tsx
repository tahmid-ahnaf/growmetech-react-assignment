import React from 'react';

import Component1 from '../../components/Component1/Component1';
import { Box } from '@mui/material';
import Component2 from '../../components/Component2/Component2';

const SecondPage: React.FC = () => {

    return (
        <Box>
            <h1>Welcome to the Second Page!</h1>
            <Component1></Component1>
            <Component2></Component2>
        </Box>
    
);
};

export default SecondPage;