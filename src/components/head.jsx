import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@emotion/react';


const Head = ({titre,soustitre}) => {


    const theme=useTheme()

    return (
        
<Box sx={{mb:'15px'}}>

<Typography variant="h5" color={theme.palette.magie.main} fontWeight={"bold"}> {titre} </Typography>
<Typography variant="body1" color={theme.palette.magie.main}>{soustitre} </Typography>


</Box>

    );
}

export default Head;
