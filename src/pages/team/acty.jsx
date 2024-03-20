import { useTheme } from '@emotion/react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { blue, green, orange, pink, purple, red, yellow } from '@mui/material/colors';

const Acty = ({titre, heure,lieu,duree,partic,matos,categ, handleDelete, item}) => {

  const ims=["/lilirosedash/images/act.jpg","/lilirosedash/images/act2.jpg","/lilirosedash/images/act3.jpg"]
 


  const random = (params) => {
    const random=Math.floor(Math.random()*3)
    return random
  }


    const theme=useTheme()

    return (
        <div>

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ims[random()]}
        title="Lili Rose"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">



          {titre } 

          
           <Box sx={{
                 p:'5px',width:'150px', 
                 borderRadius:'3px',
                 textAlign:'center',
                 display:"flex",
                 justifyContent:"space-evenly",
                 background: categ === 'Best freinds' ? blue[200] : 
                 categ  === 'Happy Family' ? pink[300] :
                 categ  === 'Job& Gig' ? green[200] :
                 categ  === 'Services' ? yellow[600] :
                 categ  === 'Hobbies' ? blue[500] :
                 categ  === 'Welness warriors' ? red[400] :
                 categ  === 'Tech Savvy Crew' ? green[500] :
                 categ  === 'Creative Fanatics' ? purple[200] :orange[300]




                 
                 
                 }}>

                    {/* {icon} */}

{/* {des === 'Best freinds' ? <DirectionsBikeIcon  fontSize='small'/> : null} */}
{categ  === 'Best freinds' ? <DirectionsBikeIcon fontSize='small' /> : null}
{categ  === 'Job& Gig' ? <ContactMailOutlinedIcon fontSize='small' /> : null}
{categ  === 'Happy Family' ? < Diversity1Icon fontSize='small' /> : null}
{categ  === 'Services' ? < ManageAccountsOutlinedIcon fontSize='small'/> : null}
{categ  === 'Hobbies' ? <SportsHandballOutlinedIcon fontSize='small' /> : null}
{categ  === 'Welness warriors' ? < MonitorHeartOutlinedIcon fontSize='small'/> : null}
{categ  === 'Tech Savvy Crew' ? < DevicesOutlinedIcon fontSize='small'/> : null}
{categ  === 'Creative Fanatics' ? <PaletteOutlinedIcon fontSize='small' /> : null}




<Typography sx={{ fontSize: "13px" }}>{categ}  </Typography>

                    
                </Box>












        </Typography>
        <Typography variant="body2" color="text.secondary">

         Heure:  <strong>{heure}</strong>
         <br></br>
          Lieu:  <strong>{lieu}</strong>
          <br></br> Durée: <strong>{duree}</strong>
          <br></br>Avec: { partic==="" ? <strong>Aucun </strong>: <strong> {partic} </strong>}
          <br></br>Votre matériel: { matos==="" ? <strong>Aucun </strong>:  <strong> {matos}  </strong>}

        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}


        <Button sx={{color:theme.palette.magie.main}} size="small"
        
        onClick={ () => {
  
          handleDelete(item)
      
      
      
      
        }}
        
        
        >Supprimer</Button>


      </CardActions>
    </Card>
        </div>
    );
}

export default Acty;
