import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import Row1 from './row1';
import Row2 from './row2';
import Row3 from './row3';
import { useTheme } from '@emotion/react';
import Head from '../../components/head';

const Dashboard = () => {



    const theme=useTheme()
    return (
        <div>


<Head titre={"DASHBOARD"} soustitre={"Hello Lili Rose ! Donne vie à ton  journal de bord !"}/>
<Row1/>

<Row2/>

<Row3/>



        </div>
    );
}

export default Dashboard;
