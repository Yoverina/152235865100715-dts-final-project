import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () =>{
    return (
        <Box sx={{ display: 'flex', p: 5}}>
            <CircularProgress variant='indeterminate' color='ternary'/>
        </Box>
    );
}

export default Loading
