import { useTheme } from '@emotion/react';
import { Theme } from '@fullcalendar/core/internal';
import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const Paperico = ({icone,libellé,nombre,titre}) => {

    const theme=useTheme()
    return (
        <div>
            
            <Paper sx={{height: '130px', minWidth:'450px', p:1.5, display:'flex', justifyContent:'space-between'}}>

<Stack gap={1}>

 {icone}

            <Typography variant="body1" color= {theme.palette.text.primary}>{libellé} </Typography>

            <Typography variant="body1" color= {theme.palette.text.primary} >{nombre} </Typography>

</Stack>
            
         
<Stack  gap={1}>

    <Typography variant="body1" color= {theme.palette.text.primary}>{titre} </Typography>

    <Typography variant="body1" color= {theme.palette.text.primary}>La plus récente</Typography>


</Stack>
               
              
            </Paper>



        </div>
    );
}

export default Paperico;
