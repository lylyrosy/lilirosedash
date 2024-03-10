import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StackedBarChart } from '@mui/icons-material';
import { Button, Stack, styled } from '@mui/material';
import { Theme } from '@fullcalendar/core/internal';
import { useTheme } from '@emotion/react';
import Head from '../../components/head';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    // color: theme.palette.getContrastText(),
    backgroundColor: theme.palette.magie.main,
    '&:hover': {
      backgroundColor: theme.palette.appco.main,
    },
  }));


  const theme=useTheme()

  return (
    <div>

<Head titre={"PEPITES OPTIMISTES"} soustitre={"Hey Lili Rose, fais confiance à ta lumière intérieure et ta force créative!"}/>


<Stack  gap={2}>


   <Accordion 
   
   defaultExpanded //pour etendre premier accordeon par defaut
//    expanded={expanded === 'panel1'} 
   onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,color:theme.palette.magie.main }}>
            Eclat positif
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Faites confiance à la vie- Louise Hay</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Je me réjouis de savoir que je suis le maître de mon esprit et que j’ai toute liberté d’en faire ce que bon me semble. Chaque instant de la Vie est un nouveau point de départ et nous démarque du passé.

Ce moment est un nouveau point de départ pour moi, ici et maintenant.

Tout va pour le mieux dans le monde qui est le mien.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0,color:theme.palette.magie.main }}>Brefs joyaux</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          L'amour sans condition : Une méthode de guérison Louise Hay          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          Si vous avez une maladie mettant la vie en danger, ne vous contentez pas d'avoir pour but de revenir là où vous en étiez avant de tomber malade. Ce n'était pas un bon endroit, sinon vous n'auriez jamais attrapé cette maladie.
Nous recherchons des traitements miracle. Les remèdes, naturels ou chimiques, peuvent être bénéfiques, mais ils ne représentent qu'un aspect de la guérison. Le corps, le mental et l'esprit doivent aller de concert. Si les chercheurs découvraient le médicament magique capable d'éliminer instantanément votre maladie, seriez-vous réellement guéri et en bonne santé? Ou bien accepteriez-vous de ne prendre que ce traitement pour le corps et retourneriez-vous immédiatement ancien style de vie mental et physique - pour créer autre chose à la place?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,color:theme.palette.magie.main}}>
          Instants lumineux
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          La méthode du miroir Louise Hay
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          En utilisant votre miroir comme un outil d'évolution, vous remarquerez que vous devenez beaucoup plus conscient des mots que vous choisissez et des choses que vous faites. Vous apprendrez également à prendre réellement soin de vous, plus que jamais auparavant. Lorsque quelque chose de bénéfique se produit dans votre vie, vous pouvez vous adresser à votre miroir de la façon suivante : «Merci, merci. C'est formidable ! Merci pour tout.» Et lorsqu'au contraire il s'agit de quelque chose que vous considérez comme négatif, vous pouvez contempler votre reflet et dire :
«Au fond, tout va bien et je t'aime. Ça finira par passer. Mais moi je t'aime, et ça c'est éternel.»
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,color:theme.palette.magie.main}}>
          Perles de sagesse
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          La force est en vous Louise Hay          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
          Quelle que soit la forme que l'univers ait choisi pour répondre à vos besoins,
Soyez reconnaissant.
Viendra le temps où vous aiderez quelqu'un d'autre
Vous ne lui offrirez peut-être pas une aide financière mais votre temps
ou votre compassion
Parfois, nous ne nous rendons pas compte que ces présents peuvent être plus précieux que l'argent


          </Typography>
        </AccordionDetails>
      </Accordion>

   

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 ,color:theme.palette.magie.main}}>
          Étincelles de bonheur
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>

          " Aimez-vous vous-même", vous êtes merveilleux !
 Louise Hay          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
          De ce principe essentiel découle le bonheur individuel et, de proche en proche, la guérison planétaire
dont chaque jour qui passe nous confirme davantage la nécessité.
Quand on commence à s'aimer, la vie s'améliore un peu plus chaque jour de façon surprenante.
On se sent mieux.
On accède aux emplois que l'on brigue; on obtient l'argent dont on a besoin.
Les relations s'améliorent".


          </Typography>
        </AccordionDetails>
      </Accordion>
















      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color:theme.palette.appco.main }}>Sourires capturés</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:'center', color:theme.palette.appco.main }}>
           Designed avec amour  by Lili Rose <br />
           Mon kiff pour l'informatique m'accompagne sur le chemin qui mène à la paix <br />
           Mon mantra : Chaque ligne de code, chaque pixel est une invitation à semer des graines de paix et de bien-être...
           <br></br>
           <ColorButton 


onClick={() => {

  window.location.href = 'https://lylyrosy.github.io/lilirose.dz/';


 }} 



sx={{
  mt:'22px',
  margin:'auto',
display:'flex',
textAlign:'center'}} variant="contained">Lili Rose Thérapie &nbsp; </ColorButton>
          </Typography>
        </AccordionDetails>
      </Accordion>




</Stack>

   



    </div>
  );
}