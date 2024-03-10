import React, { useEffect, useState  } from "react";
import { useTheme } from "@emotion/react";
import { Box, Paper, Stack, Typography, IconButton } from "@mui/material";
import Line from "../line/line";
import { v4 as uuidv4 } from "uuid";
import DownloadIcon from "@mui/icons-material/Download";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";

const Row2 = () => {

  const theme = useTheme();

  const navigate= useNavigate();

  const voir = (params) => {
    navigate('/linechart')

    
  }


  const dataline = [
    {
      id: new Date().getFullYear(),
      color: "hsl(331, 70%, 50%)",
      data: [
        {
          x: "Janvier",
          y: parseFloat(localStorage.getItem("budgetmoisjanv")) || 0,
        },
        {
          x: "Fevrier",
          y: parseFloat(localStorage.getItem("budgetmoisfev")) || 0,
        },
        {
          x: "Mars",
          y: parseFloat(localStorage.getItem("budgetmoismar")) || 0,
        },
        {
          x: "Avril",
          y: parseFloat(localStorage.getItem("budgetmoisavr")) || 0,
        },
        { x: "Mai", y: parseFloat(localStorage.getItem("budgetmoismai")) || 0 },

        {
          x: "Juin",
          y: parseFloat(localStorage.getItem("budgetmoisjuin")) || 0,
        },
        {
          x: "Juillet",
          y: parseFloat(localStorage.getItem("budgetmoisjuil")) || 0,
        },
        {
          x: "Août",
          y: parseFloat(localStorage.getItem("budgetmoisaout")) || 0,
        },
        {
          x: "Septembre",
          y: parseFloat(localStorage.getItem("budgetmoissep")) || 0,
        },
        {
          x: "Octobre",
          y: parseFloat(localStorage.getItem("budgetmoisoct")) || 0,
        },
        {
          x: "Novembre",
          y: parseFloat(localStorage.getItem("budgetmoisnov")) || 0,
        },
        {
          x: "Décembre",
          y: parseFloat(localStorage.getItem("budgetmoisdec")) || 0,
        },
      ],
    },
  ];

  let pienull = [
    { id: 'Janvier', label: 'Janvier', value:0 },
    { id: 'Février', label: 'Février', value: 0 },
    { id: 'Mars', label: 'Mars', value: 0},
    { id: 'Avril', label: 'Avril', value: 0},
    { id: 'Mai', label: 'Mai', value: 0 },
    { id: 'Juin', label: 'Juin', value: 0 },
    { id: 'Juillet', label: 'Juillet', value: 0 },
    { id: 'Août', label: 'Août', value: 0 },
    { id: 'Septembre', label: 'Septembre', value:  0 },
    { id: 'Octobre', label: 'Octobre', value: 0 },
    { id: 'Novembre', label: 'Novembre', value: 0},
    { id: 'Décembre', label: 'Décemebre', value: 0 }, ];

  JSON.parse(localStorage.getItem("piemois"))!==null?  JSON.parse(localStorage.getItem("piemois")):  localStorage.setItem('piemois', JSON.stringify(pienull))



 


  return (
    <div>
      <Stack direction={"row"} flexWrap={"wrap"} gap={1}>
        <Paper sx={{minWidth:"700px", maxWidth: "900px", flexGrow: 1 }}>
          <Stack
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            mt="22px"
            alignItems={"center"}
          >
            <Box>
              <Typography variant="body1" color={theme.palette.magie.main}>
                Visualiser le diagramme en ligne par mois{" "}
              </Typography>
            </Box>
            <Box>
              <IconButton 
              
              
              onClick={


  (params) => {

    voir()
    
  }


              } 
              
              
              
              >
                <VisibilityIcon />
              </IconButton>
            </Box>
          </Stack>

          <Line data={dataline} isdash={true}  />
        </Paper>

        <Box sx={{overflow:"auto",minWidth: '250px', maxHeight: 350, flexGrow: 1 }}>
          <Paper>
            <Typography
              variant="h6"
              color={theme.palette.magie.main}
              p={1.2}
              fontWeight={"bold"}
            >
              Budget par mois
            </Typography>
          </Paper>




{          JSON.parse(localStorage.getItem("piemois")).map((item) => 
{

  return(

<Paper sx={{display:'flex', alignItems:'center',justifyContent:'space-between', mt:1}}>

<Box p={1.2}>


<Typography variant="body1" fontWeight="600"> {item.label}</Typography>


</Box>
<Typography variant="body1" fontWeight="600"> </Typography>

<Typography 
fontWeight="600"
textAlign={"center"}
borderRadius={1.4}
width="250px"
p={1}
bgcolor={theme.palette.magie.main}
color={theme.palette.text.secondary}
variant="body2" > 
${item.value}
</Typography>
</Paper>
  )
})
}









        </Box>
      </Stack>
    </div>
  );
};

export default Row2;
