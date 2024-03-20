import React from 'react';
import Typography from '@mui/material/Typography'
import { useEffect , useState} from 'react';

import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

import { Paper, IconButton, Box, Button, styled, TextareaAutosize} from '@mui/material';

import {Close} from '@mui/icons-material';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import CalculateIcon from '@mui/icons-material/Calculate';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AddCardIcon from '@mui/icons-material/AddCard';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { TextField,InputAdornment } from '@mui/material';
import { blue, grey, pink, purple } from '@mui/material/colors';
import { useTheme } from '@emotion/react';

import Head from '../../components/head';









    const Textarea = styled(BaseTextareaAutosize)(
      ({ theme }) => `
      box-sizing: border-box;
      width: 320px;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? purple[700] : pink[200]};
      box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? purple[900] : pink[50]};
  
      &:hover {
        border-color: ${pink[400]};
      }
  
      &:focus {
        border-color: ${pink[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? purple[600] : pink[200]};
      }
  
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `,
    );

   

const ColorButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText(),
    backgroundColor: theme.palette.appco.main,
    '&:hover': {
      backgroundColor: theme.palette.ochre.main,
    },
  }));

const Memo= () => {










const theme=useTheme()
    
const [achat, setachat] = useState("");
const [prix, setprix] = useState("");

 const borderColor =
    theme.palette.mode === 'light' ? 'pink' : 'purple'; // Choisir la couleur en fonction du mode




  //avec un localstorage

  const handleAdd= () => {
 
    const newItem = { id: Date.now(), achat, prix };
  const existingItems = JSON.parse(localStorage.getItem('mydbe')) || [];
  const updatedItems = [...existingItems, newItem];
  localStorage.setItem('mydbe', JSON.stringify(updatedItems));
  setmydbe(updatedItems);

  localStorage.setItem('mydbeLength', updatedItems.length);
  localStorage.setItem('lastPrix',prix); // Stocker le dernier prix dans le stockage local


  };




//supprimer

    const [mydbe, setmydbe] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('mydbe')) || [];
        setmydbe(data);



      }, []);
    
  




    
      const handleDelete = (item) => {
        const updatedDb = mydbe.filter((entry) => entry.id !== item.id);

        
        const lastItem = updatedDb[updatedDb.length - 1]; // Récupérer le dernier élément de la liste mise à jour
        const newLastPrix = lastItem ? lastItem.prix : ""; // Récupérer le prix du dernier élément




        localStorage.setItem('mydbe', JSON.stringify(updatedDb));
        setmydbe(updatedDb);
        localStorage.setItem('mydbeLength', updatedDb.length);

        localStorage.setItem('lastPrix', newLastPrix); // Mettre à jour le dernier prix dans le stockage local


      };
    
      const handleKeyDown = (event) => {
        if (achat.length >= 200) {

          if (event.key === "Backspace" || event.key === "Delete") {
            // Autoriser la suppression même si la limite est atteinte
            return;
          }
          event.preventDefault(); // Empêcher la saisie de nouveaux caractères
        }
      };

      const handleKeyDownp = (event) => {
        if (prix.length >= 15) {

          if (event.key === "Backspace" || event.key === "Delete") {
            // Autoriser la suppression même si la limite est atteinte
            return;
          }
          event.preventDefault(); // Empêcher la saisie de nouveaux caractères
        }
      };

    return (



<Box>

<Head titre={"NOTES"} soustitre={"Hey Lili Rose ! Compose ta propre note,avec soin et inspiration !"}/>


{/* ECRIRE ET AJOUTERRRRR MA NOTE  */}


<Box noValidate autoComplete="off"
 sx={{
 width:'300px', mx:'auto'

 
 }} component="form"         
 >


<TextField


onChange={(eo) => {
  setprix((eo.target.value))
}}

fullWidth={true}
          label=""
          id="standard-start-adornment"
          sx={{ mt:'22px', display:'block',}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><NoteAltIcon/> </InputAdornment>,
            required: true,
          }}
          variant="outlined"
          defaultValue={prix} 
          placeholder="Ajoutez un titre ici.."

          onKeyDown={handleKeyDownp}
  
        
        />




<Textarea
onChange={(eo) => {
    setachat((eo.target.value))
  }}


      maxRows={2}
      aria-label="Notes"
      placeholder="Ajoutez une note ici..300 caractères maximum"
      defaultValue={achat} 
      readOnly={achat.length >= 300}

      onKeyDown={handleKeyDown}

      sx={{mb:'22px', width:'300px', mx:'auto'}}
    />













<ColorButton 


onClick={() => { handleAdd() }} 



sx={{mt:'50px',
display:'flex',
margin:'auto',
textAlign:'center'}} variant="contained">Ajouter une note &nbsp; <NoteAltIcon/></ColorButton>



</Box>






{/* AFFICHER MES NOTES LES UNES A COTE DES AUTRES */}

<Box sx={{display:'flex', gap:1, flexWrap:'wrap', width:'90%' ,mx:'auto'}}>


{mydbe.map((item) => {




    return(

        <Box>



<Paper sx={{background: theme.palette.yell.main, display:'flex', justifyContent:'space-between',height:'320px', width:'350px',mt:'22px', pt:'27px', pb:'7px', position:'relative'}}>






<Typography     
 sx={{ml:'16px', fontSize:'1.3em',maxWidth: '300px',overflowWrap: 'break-word' }} variant="h6" >
{item.prix}
<br></br>
{item.achat}
 
 </Typography>









<IconButton     



onClick={ () => {
  
    handleDelete(item)




  }}
  


sx={{position:'absolute',top:'0',right:'0'}}>
<Close sx={{fontSize:'20px'}}  />
</IconButton>


</Paper>






</Box>



    )
    
})}


</Box>


            
        </Box>
    );
}

export default Memo;
