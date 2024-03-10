import { Alert, Box, Button, FilledInput, FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Snackbar, TextField, useTheme } from '@mui/material';
import Pie from '../pie/pie';

import React from 'react';
import {useState,useEffect}  from 'react';
import { useForm } from 'react-hook-form';
import Head from '../../components/head';


const currencies = [
  { value: 'Janvier', label: 'Janvier' },
  { value: 'Février', label: 'Février' },
  { value: 'Mars', label: 'Mars' },
  { value: 'Avril', label: 'Avril' },
  { value: 'Mai', label: 'Mai' },
  { value: 'Juin', label: 'Juin' },
  { value: 'Juillet', label: 'Juillet' },
  { value: 'Août', label: 'Août' },
  { value: 'Septembre', label: 'Septembre' },
  { value: 'Octobre', label: 'Octobre' },
  { value: 'Novembre', label: 'Novembre' },
  { value: 'Décembre', label: 'Décembre' },

];




const Budget = () => {



  const [data, setData] = useState([ ]);

const [databar, setdatabar] = useState([]);

const [dataline, setdataline] = useState([]);

  const handleFormSubmit = (formData) => {


    //pour le pie chart 
 
    const newData = [
      { id: 'alimentation', label: 'alimentation', value: formData.alimentation },
      { id: 'soins', label: 'soins', value: formData.soins },
      { id: 'loisirs', label: 'loisirs', value: formData.loisirs },
      { id: 'formation', label: 'formation', value: formData.formation },
      { id: 'voyage', label: 'voyage', value: formData.voyage },
      { id: 'équipement', label: 'équipement', value: formData.equip },
      { id: 'services', label: 'services', value: formData.serv },
    ];



  




       // Sauvegarder les données dans le localStorage
      formData.mois ==='Janvier'? localStorage.setItem('budgetDatajanv', JSON.stringify(newData)):

      formData.mois ==='Février'?localStorage.setItem('budgetDatafev', JSON.stringify(newData)): 

      formData.mois ==='Mars'?localStorage.setItem('budgetDatamar', JSON.stringify(newData)):  

      formData.mois ==='Avril'?localStorage.setItem('budgetDataavr', JSON.stringify(newData)): 

      formData.mois ==='Mai'?localStorage.setItem('budgetDatamai', JSON.stringify(newData)): 

      formData.mois ==='Juin'?localStorage.setItem('budgetDatajuin', JSON.stringify(newData)): 

      formData.mois ==='Juillet'?localStorage.setItem('budgetDatajuil', JSON.stringify(newData)): 

      formData.mois ==='Août'?localStorage.setItem('budgetDataaout', JSON.stringify(newData)): 

      formData.mois ==='Septembre'?localStorage.setItem('budgetDatasep', JSON.stringify(newData)): 

      formData.mois ==='Octobre'?localStorage.setItem('budgetDataoct', JSON.stringify(newData)): 

      formData.mois ==='Novembre'?localStorage.setItem('budgetDatanov', JSON.stringify(newData)): 

      formData.mois ==='Décembre'?localStorage.setItem('budgetDatadec', JSON.stringify(newData)): null 



  
    setData(newData);


    
    const newDatamois=parseFloat(formData.alimentation )+parseFloat(formData.soins)+parseFloat(formData.loisirs)+ parseFloat(formData.formation)+ parseFloat(formData.voyage)+ parseFloat(formData.equip) +parseFloat(formData.serv) 
console.log(newDatamois)




    formData.mois ==='Janvier'?  localStorage.setItem('budgetmoisjanv', JSON.stringify(newDatamois)):

    formData.mois ==='Février'?localStorage.setItem('budgetmoisfev', JSON.stringify(newDatamois)):  

    formData.mois ==='Mars'?localStorage.setItem('budgetmoismar', JSON.stringify(newDatamois )):  

    formData.mois ==='Avril'?localStorage.setItem('budgetmoisavr', JSON.stringify(newDatamois )): 

    formData.mois ==='Mai'?localStorage.setItem('budgetmoismai', JSON.stringify(newDatamois )): 

    formData.mois ==='Juin'?localStorage.setItem('budgetmoisjuin', JSON.stringify(newDatamois )): 

    formData.mois ==='Juillet'?localStorage.setItem('budgetmoisjuil', JSON.stringify(newDatamois)): 

    formData.mois ==='Août'?localStorage.setItem('budgetmoisaout', JSON.stringify(newDatamois )): 

    formData.mois ==='Septembre'?localStorage.setItem('budgetmoissep', JSON.stringify(newDatamois )): 

    formData.mois ==='Octobre'?localStorage.setItem('budgetmoisoct', JSON.stringify(newDatamois )): 

    formData.mois ==='Novembre'?localStorage.setItem('budgetmoisnov', JSON.stringify(newDatamois)): 

    formData.mois ==='Décembre'?localStorage.setItem('budgetmoisdec', JSON.stringify(newDatamois)): null





    let piemois = [
      { id: 'Janvier', label: 'Janvier', value:localStorage.getItem("budgetmoisjanv")!== null ? localStorage.getItem("budgetmoisjanv"):"0" },
      { id: 'Février', label: 'Février', value: localStorage.getItem("budgetmoisfev")!== null? localStorage.getItem("budgetmoisfev") :  "0" },
      { id: 'Mars', label: 'Mars', value: localStorage.getItem("budgetmoismar")!== null ?  localStorage.getItem("budgetmoismar"): "0"},
      { id: 'Avril', label: 'Avril', value: localStorage.getItem("budgetmoisavr")!== null? localStorage.getItem("budgetmoisavr") : "0" },
      { id: 'Mai', label: 'Mai', value: localStorage.getItem("budgetmoismai")!== null? localStorage.getItem("budgetmoismai") : "0" },
      { id: 'Juin', label: 'Juin', value: localStorage.getItem("budgetmoisjuin")!== null?  localStorage.getItem("budgetmoisjuin") : "0" },
      { id: 'Juillet', label: 'Juillet', value: localStorage.getItem("budgetmoisjuil" )!== null?localStorage.getItem("budgetmoisjuil" )  :"0" },
      { id: 'Août', label: 'Août', value: localStorage.getItem("budgetmoisaout") !== null? localStorage.getItem("budgetmoisaout") :"0" },
      { id: 'Septembre', label: 'Septembre', value: localStorage.getItem("budgetmoissep")!== null?  localStorage.getItem("budgetmoissep"): "0" },
      { id: 'Octobre', label: 'Octobre', value: localStorage.getItem("budgetmoisoct")!== null? localStorage.getItem("budgetmoisoct") : "0" },
      { id: 'Novembre', label: 'Novembre', value: localStorage.getItem("budgetmoisnov")!== null? localStorage.getItem("budgetmoisnov") : "0"},
      { id: 'Décembre', label: 'Décembre', value: localStorage.getItem("budgetmoisdec")!== null? localStorage.getItem("budgetmoisdec")  : "0" }, ];



    localStorage.setItem('piemois', JSON.stringify(piemois))



    let total =parseFloat(localStorage.getItem("budgetmoisjanv")|| "0" )+
    parseFloat(localStorage.getItem("budgetmoisfev")|| "0")+
    parseFloat(localStorage.getItem("budgetmoismar")|| "0")+
     parseFloat(localStorage.getItem("budgetmoisavr")|| "0")+
      parseFloat( localStorage.getItem("budgetmoismai")|| "0")+ 
      parseFloat(localStorage.getItem("budgetmoisjuin")|| "0") +
      parseFloat(localStorage.getItem("budgetmoisjuil")|| "0") +
      parseFloat(localStorage.getItem("budgetmoisaout") || "0")+
      parseFloat(localStorage.getItem("budgetmoissep")|| "0")+
      parseFloat(localStorage.getItem("budgetmoisoct") || "0")+
      parseFloat( localStorage.getItem("budgetmoisnov") || "0")+
      parseFloat( localStorage.getItem("budgetmoisdec")|| "0")

      if (isNaN(total)) {
        total = 0;
    }
   
      
      localStorage.setItem('total', JSON.stringify(total))


//pour le barchart
  

// Créer un nouvel objet pour les données du bar chart
const newItem = {
  mois: formData.mois,
  alimentation: formData.alimentation,
  soins: formData.soins,
  loisirs: formData.loisirs,
  formation: formData.formation,
  voyage: formData.voyage,
  equipements: formData.equip,
  services: formData.serv
};

// Obtenir les données existantes du localStorage
const existingItems = JSON.parse(localStorage.getItem('budgetDatabar')) || [];

// Trouver l'index de l'élément correspondant au mois dans les données existantes
const existingIndex = existingItems.findIndex(item => item.mois === formData.mois);

if (existingIndex !== -1) {
  // Si le mois existe déjà, remplacer ses données
  existingItems[existingIndex] = newItem;
} else {
  // Sinon, ajouter les nouvelles données
  existingItems.push(newItem);
}

// Sauvegarder les données mises à jour dans le localStorage
localStorage.setItem('budgetDatabar', JSON.stringify(existingItems));

// Mettre à jour l'état des données du bar chart
setdatabar(existingItems);



 //pour le line chart 

 // Construire les données du line chart
 const newDataLine = {
  id: formData.mois,
  color: `hsl(${Math.random() * 360}, 70%, 50%)`, // Générer une couleur aléatoire
  data: [
    { x: 'Alimentation', y: formData.alimentation },
    { x: 'Soins', y: formData.soins },
    { x: 'Loisirs', y: formData.loisirs },
    { x: 'Formation', y: formData.formation },
    { x: 'Voyages', y: formData.voyage },
    { x: 'Équipement', y: formData.equip },
    { x: 'Services', y: formData.serv }
  ]
};




// Obtenir les données existantes du localStorage pour le line chart
const existingDataLine = JSON.parse(localStorage.getItem('budgetDataline')) || [];

// Trouver l'index de l'élément correspondant au mois dans les données existantes
const existingIndexLine = existingDataLine.findIndex(item => item.id === newDataLine.id);

if (existingIndexLine !== -1) {
  // Si le mois existe déjà, remplacer ses données
  existingDataLine[existingIndexLine] = newDataLine;
} else {
  // Sinon, ajouter les nouvelles données
  existingDataLine.push(newDataLine);
}

// Sauvegarder les données du line chart dans le localStorage
localStorage.setItem('budgetDataline', JSON.stringify(existingDataLine));

// Mettre à jour l'état des données du line chart
setdataline(existingDataLine);
 



  };

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
      formState: { errors },
    } = useForm();
  
    const onSubmit = (formData) =>
    
    { 
      handleFormSubmit(formData);

      handleClick();
      
      reset();
      
      console.log("validation");};
  
  
  const theme=useTheme()


    return (



        <Box
        onSubmit={handleSubmit(onSubmit)}

        component="form"
    
        // noValidate
        // autoComplete="off"
        
        
        >

<Head titre={"BUDGET"} soustitre={"Salut Rose, prends un moment pour t'occuper de toi en prenant en compte tes dépenses de bien-être !"}/>


<Box  sx={{textAlign:'center',mt:'22px' , mb:'22px'}}>
  
  <Button  type="submit"
sx={{textTransform:"capitalize", background:theme.palette.magie.main}} variant='contained'> Prends soin de toi </Button>


<Snackbar    anchorOrigin={{ vertical: "top", horizontal: "left" }} //position de snack
 open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert
    onClose={handleClose}
    severity="success"
    variant="filled"
    sx={{ width: '100%' }}
  >
 Wow, tu es incroyable ! Ta détermination à prendre soin de toi est tout simplement inspirante !

  </Alert>
</Snackbar>


</Box>


<TextField 
      
      {...register("mois")}

    //   sx={{flex:1}}
          select
          label="Mois"
          defaultValue="Janvier"
          helperText="Please select month"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}


          
        </TextField>


<FormHelperText>Entrez le montant des dépenses pour une alimentation saine: achats alimentaires bio, suppléments nutritionnels, livraison de repas sains...</FormHelperText>


<FormControl fullWidth sx={{  m: 1,width: 'calc(50% - 8px)'}} variant="filled">


<InputLabel htmlFor="filled-adornment-amount">Alimentation saine </InputLabel>
<FilledInput 
type="number"
inputProps={{ min: "0" }} 

id="filled-adornment-amount"

startAdornment={<InputAdornment position="start">$</InputAdornment>}
{...register("alimentation", { required: true })}
          error={Boolean(errors.alimentation)}

/>
{errors.alimentation && (
          <FormHelperText sx={{color: 'red'}}>Montant obligatoire</FormHelperText>
        )}
</FormControl>


 <FormHelperText>Entrez le montant des dépenses pour les soins personnels: produits de beauté, soins de la peau, soins capillaires, produits d'hygiène..</FormHelperText>


 <FormControl fullWidth sx={{  m: 1,width: 'calc(50% - 8px)'}} variant="filled">


          <InputLabel htmlFor="filled-adornment-amount">Soins personnels</InputLabel>
          <FilledInput 
          type="number"
          inputProps={{ min: "0" }} 

            id="filled-adornment-amount"

            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            {...register("soins", { required: true })}
          error={Boolean(errors.soins)}

          />
          {errors.soins && (
          <FormHelperText sx={{color: 'red'}}>Montant obligatoire</FormHelperText>
        )}
        </FormControl>



<FormHelperText>Entrez le montant des dépenses pour les loisirs et divertissements: sorties, cinéma, théâtre...</FormHelperText>


<FormControl fullWidth sx={{  m: 1,width: 'calc(50% - 8px)'}} variant="filled">


<InputLabel htmlFor="filled-adornment-amount">Loisirs et divertissements</InputLabel>
<FilledInput 
type="number"
inputProps={{ min: "0" }} 

id="filled-adornment-amount"

startAdornment={<InputAdornment position="start">$</InputAdornment>}
{...register("loisirs", { required: true })}
          error={Boolean(errors.loisirs)}

/>
{errors.loisirs && (
          <FormHelperText sx={{color: 'red'}}>Montant obligatoire</FormHelperText>
        )}
</FormControl>


<FormHelperText>Entrez le montant des dépenses pour les formations personnelle : livres, cours en ligne, ateliers...</FormHelperText>


<FormControl fullWidth sx={{  m: 1,width: 'calc(50% - 8px)'}} variant="filled">


<InputLabel htmlFor="filled-adornment-amount">Formation personnelle </InputLabel>
<FilledInput 
type="number"
inputProps={{ min: "0" }} 

id="filled-adornment-amount"

startAdornment={<InputAdornment position="start">$</InputAdornment>}
{...register("formation", { required: true })}
          error={Boolean(errors.formation)}
/>
{errors.formation && (
          <FormHelperText sx={{color: 'red'}}>Montant obligatoire</FormHelperText>
        )}
</FormControl>





<FormHelperText>Entrez le montant des dépenses pour les voyages et escapades : séjours dans des centres de bien-être, vacances relaxantes...</FormHelperText>

<FormControl fullWidth sx={{  m: 1,width: 'calc(50% - 8px)'}} variant="filled">


<InputLabel htmlFor="filled-adornment-amount">Voyages et escapades</InputLabel>
<FilledInput 
type="number"
inputProps={{ min: "0" }} 

id="filled-adornment-amount"

startAdornment={<InputAdornment position="start">$</InputAdornment>}
{...register("voyage", { required: true })}
          error={Boolean(errors.voyage)}
/>
{errors.voyage && (
          <FormHelperText sx={{color: 'red'}}>Montant obligatoire</FormHelperText>
        )}
</FormControl>


<FormHelperText>Entrez le montant des dépenses pour les équipement pour le bien-être à la maison diffuseurs d'huiles essentielles,bains moussants , articles pour le sommeil matelas, oreillers...</FormHelperText>


<FormControl fullWidth sx={{  m: 1,width: 'calc(50% - 8px)'}} variant="filled">


<InputLabel htmlFor="filled-adornment-amount">Équipement </InputLabel>
<FilledInput 
type="number"
inputProps={{ min: "0" }} 

id="filled-adornment-amount"

startAdornment={<InputAdornment position="start">$</InputAdornment>}
{...register("equip", { required: true })}
          error={Boolean(errors.equip)}
/>
{errors.equip && (
          <FormHelperText sx={{color: 'red'}}>Montant obligatoire</FormHelperText>
        )}
</FormControl>







<FormHelperText>Entrez le montant des dépenses pour les services de bien-être : séances de coaching , consultations en nutrition...</FormHelperText>


<FormControl fullWidth sx={{  m: 1,width: 'calc(50% - 8px)'}} variant="filled">


<InputLabel htmlFor="filled-adornment-amount">Services </InputLabel>
<FilledInput 
type="number"
inputProps={{ min: "0" }} 

id="filled-adornment-amount"

startAdornment={<InputAdornment position="start">$</InputAdornment>}
{...register("serv", { required: true })}
          error={Boolean(errors.serv)}
/>
{errors.serv && (
          <FormHelperText sx={{color: 'red'}}>Montant obligatoire</FormHelperText>
        )}
</FormControl>

{/* ici on peut mettre le bouton en bas */}



        </Box>
    );
}

export default Budget;
