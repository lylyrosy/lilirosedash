import * as React from 'react';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';


import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import getDesignTokens from './theme';
import { Outlet } from 'react-router-dom';




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(localStorage.getItem("modeactuel")===null? 'light': localStorage.getItem("modeactuel")==='light'? 'light': 'dark');


  // const [mode, setMode] = React.useState('light'); si je veux utiliser un theme fixe a light ou a dark

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (


    <ThemeProvider theme={theme}>

 <Box sx={{ display: 'flex' }}>



      <CssBaseline />
     




      <Topbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} /> {/* Utiliser le composant AppBarComponent */}


      <Sidebar open={open} handleDrawerClose= {handleDrawerClose} />
   
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />


        <Outlet>



        </Outlet>
      
      
      </Box>
    </Box>

    </ThemeProvider>


   
  );
}


