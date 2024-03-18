import React from 'react';
import { useEffect } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, MenuItem, Snackbar, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { addRow } from '../../pages/team/data';
import Head from '../../components/head';


const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const regPassword=
/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const regTel = /^\+(?:[0-9] ?){6,14}[0-9]$/;


const regHeure =/\d{2}:\d{2}/;




const currencies = [
    {
      value: 'Happy Family',
      label: 'Happy Family',
    },
    {
      value: 'Best freinds',
      label: 'Best freinds',
    },
    {
      value: 'Job& Gig',
      label: 'Job& Gig',
    },
    {
      value: 'Services',
      label: 'Services',
    },
    {
        value: 'Hobbies',
        label: 'Hobbies',
      },
      {
        value: 'Welness warriors',
        label: 'Welness warriors',
      },
      {
        value: 'Tech Savvy Crew',
        label: 'Tech Savvy Crew',
      },
      {
        value: 'Creative Fanatics',
        label: 'Creative Fanatics',
      },
      {
        value: 'Autre',
        label: 'Autre',
      },
     
  ];




const New = () => {



 
  

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
    
  
  
  
  
  
  
  
  
  
  
  
  
  
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },reset,
      
    } = useForm();
  
    const onSubmit = (formData) =>{
      
      addRow(formData);
  

      handleClick(); 
      reset() ;// Réinitialise le formulaire après soumission
  
  
      
      console.log("validation");};
  
  
  const theme=useTheme()






    return (




 
        <Box

        onSubmit={handleSubmit(onSubmit)}

  component="form"
  sx={{
    display:"flex", flexDirection:"column",gap:2
  }}
  noValidate
  autoComplete="off"
>


<Head titre={"CREER UNE ACTIVITE "} soustitre={"Hello Lili Rose! Quelle belle journée pour la création ! Laisse libre cours à ton imagination !"}/>


{/* <Typography variant="h5" color={theme.palette.magie.main} >Créer une activité </Typography> */}

<TextField 
     
     
     error={Boolean(errors.titre)}
     {...register("titre", { required: true, minLength:3})}
    helperText= { Boolean(errors.titre)?"Titre obligatoire, au moins 3 caractères  !":null}


      sx={{flex:1,width: 'calc(50% - 8px)'}}  label="Titre de l'activité" variant="filled" />


<TextField  
 
 

  
 error={Boolean(errors.heure)}
 {...register("heure", { required: true, pattern:regHeure})}

helperText= { Boolean(errors.heure)?"Heure obligatoire,  saisir une heure valide ! exemple: 15:00":null}
 
 
 
 sx={{flex:1,width: 'calc(50% - 8px)'}} label="Heure de l'activité" variant="filled" />


<TextField 
     
     
     error={Boolean(errors.duree)}
     {...register("duree", { required: true, minLength:1})}
    helperText= { Boolean(errors.duree)?"Durée obligatoire !":null}


      sx={{flex:1,width: 'calc(50% - 8px)'}}  label="Durée de l'activité" variant="filled" />


<TextField 
     
     
     error={Boolean(errors.lieu)}
     {...register("lieu", { required: true, minLength:1})}
    helperText= { Boolean(errors.lieu)?"Lieu obligatoire !":null}


      sx={{flex:1,width: 'calc(50% - 8px)'}}  label="Lieu de l'activité" variant="filled" />

<TextField 
     
     
     error={Boolean(errors.matos)}
     {...register("matos")}


      sx={{flex:1,width: 'calc(50% - 8px)'}}  label="Matériel necessaire(facultatif) " variant="filled" />


<Stack sx={{gap:2}}  direction={"row"}>


<TextField 
      
      {...register("des")}

    //   sx={{flex:1}}
          select
          label="Catégorie"
          defaultValue="Happy Family"
          helperText="Please select category"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}


          
        </TextField>




        

  


      <TextField 
     
     
     error={Boolean(errors.notes)}
     {...register("notes")}


      sx={{flex:1,maxWidth: '50%'}}  label="Participants(facultatif)" variant="filled" />








</Stack>




{/* bouton de confirmation */}

<Box  sx={{textAlign:'right',mt:'22px'}}>

<Button  type="submit" 
sx={{textTransform:"capitalize", background:theme.palette.magie.main}} variant='contained'> Confirmer  </Button>


<Snackbar    anchorOrigin={{ vertical: "top", horizontal: "left" }} //position de snack
open={open} autoHideDuration={6000} onClose={handleClose}>
<Alert
onClose={handleClose}
severity="success"
variant="filled"
sx={{ width: '100%' }}
>

On va bien s'amuser , nous allons accomplir de grandes choses ! 

</Alert>
</Snackbar>


</Box>



</Box>
    );
}

export default New;
 
