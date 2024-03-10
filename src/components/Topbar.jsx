import React , { useState,useEffect,useRef } from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box, Button, Stack, createTheme} from '@mui/material';
import { RoomTwoTone } from '@mui/icons-material';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useTheme } from '@emotion/react';

const ColorButton = styled(Button)(({ theme }) => ({
  // color: theme.palette.getContrastText(),
  backgroundColor: theme.palette.magie.main,
  '&:hover': {
    backgroundColor: theme.palette.appco.main,
  },
}));




const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));




const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),

  }));


const Topbar = ({open,handleDrawerOpen,setMode}) => {

  const theme=useTheme();


  let highlightedElements = []; // Garder une trace des éléments mis en évidence

  const searchTextInPage = (text) => {
    const elements = document.querySelectorAll('body *'); // Recherche tous les éléments sur la page
    const searchTextRegex = new RegExp(`\\b${text.replace(/\s+/g, '\\s+')}\\b`, 'gi'); // Expression régulière pour rechercher le texte complet

    clearHighlightedText(); // Effacer les mises en évidence existantes

    if (text.trim() === '') return; // Quitter si le texte de recherche est vide

    elements.forEach((element) => {
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false); // Crée un marcheur dans l'arbre DOM

      while (walker.nextNode()) {
        const node = walker.currentNode; // Obtient le nœud actuel
        const textContent = node.nodeValue;
        let match;
        
        while ((match = searchTextRegex.exec(textContent)) !== null) {
          const index = match.index;
          const length = match[0].length;

          const beforeText = document.createTextNode(textContent.substring(0, index));
          const highlightedText = document.createTextNode(match[0]);
          const afterText = document.createTextNode(textContent.substring(index + length));

          const highlightedSpan = document.createElement('span');
          highlightedSpan.style.backgroundColor = 'pink';
         

          highlightedSpan.appendChild(highlightedText);

          // Remplace le contenu du nœud de texte par les nouveaux nœuds de texte et l'élément <span>
          node.parentNode.insertBefore(beforeText, node);
          node.parentNode.insertBefore(highlightedSpan, node);
          node.parentNode.insertBefore(afterText, node.nextSibling);
          node.parentNode.removeChild(node);

          // Ajouter l'élément mis en évidence à la liste pour le supprimer ultérieurement si nécessaire
          highlightedElements.push(highlightedSpan);
        }
      }
    });
  };











  const clearHighlightedText = () => {
    highlightedElements.forEach((element) => {
      const parent = element.parentNode;
      while (element.firstChild) {
        parent.insertBefore(element.firstChild, element);
      }
      parent.removeChild(element);
    });
    highlightedElements = []; // Réinitialiser la liste des éléments mis en évidence
  };

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    searchTextInPage(searchText);
  };




    return (
        <div>


<AppBar sx={{background:theme.palette.magie.main}} position="fixed" open={open} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography> */}


<Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              id="searchInput" // Ajoutez un ID à l'élément InputBase
              onChange={handleSearchChange}

            
            />
          </Search>






<Box sx={{flexGrow:'1'}} />


<Stack direction={"row"}>


{theme.palette.mode==="light"? 

(<IconButton 

onClick={() => {


  localStorage.setItem("modeactuel",theme.palette.mode==="light"?"dark":"light")


  setMode(theme.palette.mode==="light" ? "dark" : "light") 

//je peux utiliser ce code aussi  il equivaut a  setMode(theme.palette.mode==="light" ? "dark" : "light") 
//   setMode((prevMode) =>
//   prevMode === 'light' ? 'dark' : 'light',
// );
  
}}



color="inherit">
  <WbSunnyOutlinedIcon />
</IconButton>)
:
(<IconButton 

  onClick={() => {

    localStorage.setItem("modeactuel",theme.palette.mode==="light"?"dark":"light")
    setMode(theme.palette.mode==="light" ? "dark" : "light") 

  //   setMode((prevMode) =>
  //   prevMode === 'light' ? 'dark' : 'light',
  // );
    
  }}


color="inherit">
  <NightlightOutlinedIcon  />
</IconButton>)

} 
{/* <IconButton color="inherit">
  <SettingsOutlinedIcon/>
</IconButton> */}

{/* <IconButton color="inherit">
  < NotificationsNoneOutlinedIcon />
</IconButton> */}

{/* <IconButton color="inherit">
  <Person2OutlinedIcon/>
</IconButton> */}
<IconButton color="inherit">
<ColorButton 


onClick={() => {

  window.location.href = 'https://lylyrosy.github.io/lilirose.dz/';


 }} 



sx={{mt:'50px',
display:'flex',
margin:'auto',
textAlign:'center'}} variant="contained">Lili Rose Thérapie &nbsp; </ColorButton></IconButton>

</Stack >

        </Toolbar>
      </AppBar>
            
        </div>
    );
}

export default Topbar;

