import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { addRow } from '../infos/data';



const regEmail=
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const regPassword=
/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const regTel = /^\+(?:[0-9] ?){6,14}[0-9]$/;





const currencies = [
    {
      value: 'Family',
      label: 'Family',
    },
    {
      value: 'Best freinds',
      label: 'Best freinds',
    },
    {
      value: 'Job',
      label: 'Job',
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
      {
        value: '',
        label: '',
      },
  ];





const Nouveau = () => {











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
    formState: { errors },reset
  } = useForm();

  const onSubmit = (formData) =>{
    
    addRow(formData);

    
    handleClick(); 
    reset(); // Réinitialise le formulaire après soumission


    
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


<Stack sx={{gap:2}}  direction={"row"}>


     <TextField 
     
     
     error={Boolean(errors.nom)}
     {...register("nom", { required: true, minLength:3})}
    helperText= { Boolean(errors.nom)?"Nom obligatoire, au moins 3 caractères  !":null}


      sx={{flex:1}}  label="Nom" variant="filled" />



      <TextField
      
      
      error={Boolean(errors.pre)}
      {...register("pre", { required: true, minLength:3})}
     helperText= { Boolean(errors.pre)?"Prénom obligatoire, au moins 3 caractères  !":null}
      
      
      sx={{flex:1}}   label="Prénom" 
     variant="filled" /></Stack>



      
   
      <TextField 
      
      error={Boolean(errors.adress)}
      {...register("adress", { required: true, minLength:3})}
     helperText= { Boolean(errors.adress)?"Adresse obligatoire, au moins 3 caractères  !":null}
      
       label="Adresse" variant="filled" />


      <Stack sx={{gap:2}}  direction={"row"}>



 <TextField  
 
 
 
  
 error={Boolean(errors.tel)}
 {...register("tel", { required: true, pattern:regTel})}

helperText= { Boolean(errors.tel)?"Numéro obligatoire,  saisir un numéro valide ! exemple: +123456789 ":null}
 
 
 
 sx={{flex:1}} label="Tel" variant="filled" />



      <TextField 
      
      
      error={Boolean(errors.email)}
      {...register("email", { required: true, pattern:regEmail})}

     helperText= { Boolean(errors.email)?"E-mail obligatoire,  saisir une adresse e-mail valide ! exemple: techwizards@lilirose.dz ":null}
      
      
      
      sx={{flex:1}}   label="E-mail" variant="filled" />


      </Stack>


      <Stack sx={{gap:2}}  direction={"row"}>

    <TextField 
    
    error={Boolean(errors.ville)}
      {...register("ville", { required: true, minLength:2})}
     helperText= { Boolean(errors.ville)?"Ville obligatoire, au moins 2 caractères  !":null}



    sx={{flex:1}}  id="filled-basic" label="Ville" variant="filled" />







      <TextField 
        {...register("pays")}

      
      sx={{flex:1}}   label="Pays" variant="filled" />

      </Stack>


      <Stack sx={{gap:2}}  direction={"row"}>





  
<Box sx={{width:"100px"}}>

<TextField

{...register("Age")}


      sx={{flex:1}} 
          id="filled-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          inputProps={{ min: "0" }} 
        />
  
</Box>
   



      <TextField 

{...register("res")}

      
      sx={{flex:1}} label="Réseaux sociaux" variant="filled" />
      {/* <TextField id="filled-basic" label="Notes" variant="filled" /> */}

      <TextField 
      
      
      sx={{flex:1}}
          select
          label="Catégorie"
          defaultValue="Family"
          helperText="Please select category"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

   

</Stack>

<TextField 
  {...register("notes")}


sx={{flex:1}} 
          label="Notes"
          multiline
          rows={3}
          defaultValue=""
          variant="filled"
        />

<Box  sx={{textAlign:'right'}}>
  
  <Button  type="submit" 
sx={{textTransform:"capitalize", background:theme.palette.magie.main}} variant='contained'> Marhba bik dans la team  </Button>


<Snackbar    anchorOrigin={{ vertical: "top", horizontal: "left" }} //position de snack
 open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert
    onClose={handleClose}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >

Ravis de t'avoir parmi nous! Ensemble, nous allons accomplir de grandes choses ! 

  </Alert>
</Snackbar>


</Box>



    </Box>
    );
}

export default Nouveau;

function useState(arg0) {
  throw new Error('Function not implemented.');
}

