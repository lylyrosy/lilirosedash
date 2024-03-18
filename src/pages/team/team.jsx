import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import {  rows } from './data';
import { Typography,Box, Button, Snackbar, Alert } from "@mui/material";
import { useTheme } from '@emotion/react';

import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { blue, green, orange, pink, purple, red, yellow } from '@mui/material/colors';

import Head from '../../components/head';
import { useLocation, useNavigate} from 'react-router-dom';



const Team = () => {




    const theme=useTheme();

const navigate=useNavigate();

const location=useLocation();

const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};






    const handleDelete = (idToDelete) => {


  
      // Filtrer les lignes pour exclure la ligne à supprimer
  const updatedRows = rows.filter(row => row.id !== idToDelete);


  // Mettre à jour le localStorage avec les lignes filtrées
  localStorage.setItem('rows', JSON.stringify(updatedRows));

  


    // Vérifier si le tableau rows n'est pas vide
    if (updatedRows.length > 0) {
      // Récupérer le dernier élément (dernière ligne) du tableau rows
      let lastRow = updatedRows[updatedRows.length - 1];
      // Récupérer le titre de la dernière ligne
      let lastTitle = lastRow.titre;
      localStorage.setItem('lastact',lastTitle  );
  
      // Récupérer la longueur du tableau rows
      let nb = updatedRows.length;
      localStorage.setItem('nbact', nb);
  
  
  
      // Retourner le dernier titre et la longueur du tableau
      
  
    } else {
      // Si le tableau rows est vide, retourner des valeurs par défaut
      localStorage.setItem('lastact',"Aucune activité"  );
      localStorage.setItem('nbact', "0");
  
    }


    // window.location.reload()  

    // Ouvrir le Snackbar
    handleClick();






    };






    const columns = [

      { field: 'id', headerName: 'ID',  flex: 1,align:'center' ,headerAlign:"center"},

    
        { field: 'titre', headerName: 'Titre',  flex: 1,align:'center' ,headerAlign:"center"},
        { field: 'heure', headerName: 'Heure',flex:1, align:'center',headerAlign:"center"},
        { field: 'duree', headerName: 'Duree', flex:1, align:'center',headerAlign:"center"},
       { field: 'lieu', headerName: 'Lieu',  flex: 1,align:'center' ,headerAlign:"center"},

        { field: 'des',
         headerName: 'Catégorie', 
          flex:1, align:'center',
          headerAlign:"center",
         renderCell: ({row:{des}}) => {

            // let icon = null;
            //     if (des === 'Family') {
            //         icon = <PaletteOutlinedIcon />;
            //     }

         
    
            return(


         
    
                <Box sx={{background:theme.palette.magie.main,
                 p:'5px',width:'150px', 
                 borderRadius:'3px',
                 textAlign:'center',
                 display:"flex",
                 justifyContent:"space-evenly",
                 background: des === 'Best freinds' ? blue[200] : 
                 des === 'Happy Family' ? pink[300] :
                 des === 'Job& Gig' ? green[200] :
                 des === 'Services' ? yellow[600] :
                 des === 'Hobbies' ? blue[500] :
                 des === 'Welness warriors' ? red[400] :
                 des === 'Tech Savvy Crew' ? green[500] :
                 des === 'Creative Fanatics' ? purple[200] :orange[300]




                 
                 
                 }}>

                    {/* {icon} */}

{/* {des === 'Best freinds' ? <DirectionsBikeIcon  fontSize='small'/> : null} */}
{des === 'Best freinds' ? <DirectionsBikeIcon fontSize='small' /> : null}
{des === 'Job& Gig' ? <ContactMailOutlinedIcon fontSize='small' /> : null}
{des === 'Happy Family' ? < Diversity1Icon fontSize='small' /> : null}
{des === 'Services' ? < ManageAccountsOutlinedIcon fontSize='small'/> : null}
{des === 'Hobbies' ? <SportsHandballOutlinedIcon fontSize='small' /> : null}
{des === 'Welness warriors' ? < MonitorHeartOutlinedIcon fontSize='small'/> : null}
{des === 'Tech Savvy Crew' ? < DevicesOutlinedIcon fontSize='small'/> : null}
{des === 'Creative Fanatics' ? <PaletteOutlinedIcon fontSize='small' /> : null}




<Typography sx={{ fontSize: "13px" }}>{des}  </Typography>

                    
                </Box>
            )
            
         }
        
        },
    
        { field: 'matos', headerName: 'Matériel',  flex: 1,align:'center' ,headerAlign:"center"},
        { field: 'notes', headerName: 'Description',  flex: 1,align:'center' ,headerAlign:"center"},


        {
          field: 'actions',
          headerName: 'Actions',
          flex: 1,
          align: 'center',
          headerAlign: 'center',
          sortable: false,
          
          renderCell: ({ row}) => (
            <Button   onClick={() => handleDelete(row.id)} variant="outlined"        
            sx={{ color: theme.palette.magie.main, borderColor: theme.palette.magie.main }}
            >
              Supprimer
            </Button>
          ),
        },

    
      ];

    




    return (
        

          
          
<Box style={{ height:'600px',width: '98%', mx: 'auto' }}>

<Head titre={"MES ACTIVITES"} soustitre={"Voici la liste de tes activités! profite de chaque instant Lili Rose !"}/>


      <DataGrid
      autoPageSize
      checkboxSelection
      slots={{
        toolbar: GridToolbar,
      }}


      
      rows= {rows} 
      
      
      columns={columns} 
      />


<Snackbar    anchorOrigin={{ vertical: "top", horizontal: "left" }} //position de snack
open={open} autoHideDuration={6000} onClose={handleClose}>
<Alert
onClose={handleClose}
severity="success"
variant="filled"
sx={{ width: '100%' }}
>

Activité supprimée! 

</Alert>
</Snackbar>
    </Box>
            
        
    );
}

export default Team;
