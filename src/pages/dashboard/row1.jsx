import { Stack, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Paperico from './paperico';
import { useTheme } from '@emotion/react';
import { ResponsivePie } from '@nivo/pie'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const data=[
    { id: 'Janvier', label: 'Janvier', value:0 },
    { id: 'Février', label: 'Février', value:0},
    { id: 'Mars', label: 'Mars', value: 0},
    { id: 'Avril', label: 'Avril', value:0},
    { id: 'Mai', label: 'Mai', value: 0 },
    { id: 'Juin', label: 'Juin', value: 0 },
    { id: 'Juillet', label: 'Juillet', value: 0 },
    { id: 'Août', label: 'Août', value:0},
    { id: 'Septembre', label: 'Septembre', value:0},
    { id: 'Octobre', label: 'Octobre', value: 0},
    { id: 'Novembre', label: 'Novembre', value: 0},
    { id: 'Décembre', label: 'Décembre', value: 0 }, ]






const Row1 = () => {   
    const theme=useTheme()




    return (

     


        <Stack sx={{mb:'22px'}} direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{xs: "center", sm:"space-evenly"} }>


      <Paperico icone= {<FormatListNumberedIcon sx={{fontSize:'23px', color:theme.palette.magie.main}} /> } libellé={"Activités"} nombre={localStorage.getItem("nbact")} titre={ localStorage.getItem("lastact")} />

      <Paperico icone= {<NoteAltIcon sx={{fontSize:'23px', color:theme.palette.magie.main}}/> } libellé={"Notes"} nombre={localStorage.getItem("mydbeLength")} titre={localStorage.getItem("lastPrix")!== "" ? localStorage.getItem("lastPrix") : "Aucun titre"} />



      <Paper sx={{height: '130px', minWidth:'400px', p:1.5, display:'flex', justifyContent:'space-evenly'}}>

<Stack gap={1}>

<AttachMoneyIcon/>

<Typography variant="body1" color= {theme.palette.text.primary}>Budget annuel </Typography>

            <Typography variant="body1" color= {theme.palette.text.primary}> {localStorage.getItem("total")}$ </Typography>

</Stack>
            
         
<Stack  gap={1}>

  <Box sx={{height:'100px', width:'100px' }} >


<ResponsivePie
        data={  JSON.parse(localStorage.getItem("piemois"))!==null ?  JSON.parse(localStorage.getItem("piemois")): data }
        margin={{ top: 10, right: 80, bottom: 10, left: 80 }}
        innerRadius={0.7}
        enableArcLabels={false}
        enableArcLinkLabels={false}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}


        theme={
            {
        
            
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": '#777777',
                            "strokeWidth": 1
                        }
                    },
                    "legend": {
                        "text": {
                            "fontSize": 12,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke":'#777777',
                            "strokeWidth": 1
                        },
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": "#dddddd",
                        "strokeWidth": 1
                    }
                },
                "legends": {
                    "title": {
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    },
                    "ticks": {
                        "line": {},
                        "text": {
                            "fontSize": 10,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "annotations": {
                    "text": {
                        "fontSize": 13,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "link": {
                        "stroke": "#000000",
                        "strokeWidth": 1,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "outline": {
                        "stroke": "#000000",
                        "strokeWidth": 2,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "symbol": {
        
        
                        "fill": "#000000",
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    }
                },
                "tooltip": {
                    "container": {
                        // "background": "#ffffff",
                        background: theme.palette.background.default, // Couleur de fond du tooltip
                        color: theme.palette.text.primary, // Couleur du texte du tooltip
        
                        "fontSize": 12
                    },
                    "basic": {},
                    "chip": {},
                    "table": {},
                    "tableCell": {},
                    "tableCellValue": {}
                }
            }
        
        }



        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
      
    />


</Box>


  {/* pie */}

    {/* <Typography variant="body1" color= {theme.palette.text.primary}>titre</Typography> */}

    {/* <Typography variant="body1" color= {theme.palette.text.primary}>La plus récente</Typography> */}


</Stack>
               
              
            </Paper>






            
        </Stack>
    );
}

export default Row1;
