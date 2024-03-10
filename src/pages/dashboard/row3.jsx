import React,{useEffect, useState} from 'react';
import { useTheme } from '@emotion/react';
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import Pie from '../pie/pie';
import Barchart from '../barchart/barchart';

import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";




const Row3 = () => {

    const navigate= useNavigate();

    const voir = (params) => {
      navigate('/lilirosedash/piechart')
  
      
    }
  


    const [data, setData] = useState([]);

    useEffect(() => {
        // Récupérer les données du localStorage
        const storedData = localStorage.getItem('budgetDatabar');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []); // Le tableau vide indique que useEffect s'exécutera une fois après le premier rendu



 



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
        { id: 'Décembre', label: 'Décembre', value: 0 }, ];
    
      JSON.parse(localStorage.getItem("piemois"))!==null?  JSON.parse(localStorage.getItem("piemois")):  localStorage.setItem('piemois', JSON.stringify(pienull))

    const theme=useTheme()
    return (


        <Stack flexDirection={"row"} gap={2} flexWrap={"wrap"} >
            
<Paper sx={{minWidth:"400px", maxWidth: "50%" ,mt:'22px', flexGrow:1}}>

<Stack  flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            mt="22px"
            alignItems={"center"}>
    <Box>
              <Typography variant="body1" color={theme.palette.magie.main}>
                Visualiser le diagramme à tartes par mois{" "}
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
            </Box></Stack>



<Pie data={JSON.parse(localStorage.getItem("piemois"))} ispie={true} />

      

</Paper>

<Paper  sx={{minWidth:"400px", maxWidth: "50%", mt:'22px' , flexGrow:1}}>


<Barchart data= {data} isbar={true} />

</Paper>





        </Stack>
    );
}

export default Row3;
