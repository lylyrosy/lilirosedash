import React from 'react';
import Acty from './acty';
import { Box } from '@mui/material';
import{useState, useEffect} from 'react';
import Head from '../../components/head';

const Actymap = () => {

//supprimer

const [mydbe, setmydbe] = useState([]);

useEffect(() => {
    const data = JSON.parse(localStorage.getItem('rows')) || [];
    setmydbe(data);



  }, []);




  const handleDelete = (item) => {
    const updatedDb = mydbe.filter((entry) => entry.id !== item.id);

    
    const lastItem = updatedDb[updatedDb.length - 1]; // Récupérer le dernier élément de la liste mise à jour
    const newLastPrix = lastItem ? lastItem.titre : "Aucun titre"; // Récupérer le prix du dernier élément




    localStorage.setItem('rows', JSON.stringify(updatedDb));
    setmydbe(updatedDb);
    localStorage.setItem('nbact', updatedDb.length);

    localStorage.setItem('lastact', newLastPrix); // Mettre à jour le dernier prix dans le stockage local


  };




    return (

        <>

<Head titre={"MES ACTIVITES"} soustitre={"Voici la liste de tes activités! profite de chaque instant Lili Rose !"}/>


        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', width: '90%', mx: 'auto' }}>




            {mydbe.map((item) => {




                return (

                    <Box key={item.id}>



                    
<Acty titre={item.titre} heure={item.heure} lieu={item.lieu} duree={item.duree} partic={item.partic} matos={item.matos} categ={item.categ} handleDelete={handleDelete} item={item} />




                    </Box>



                );

            })}


        </Box>

        </>
        
    );
}

export default Actymap;


