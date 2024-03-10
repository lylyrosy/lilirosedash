import React from 'react';



import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';
import { styled, useTheme, Avatar, Typography, Tooltip } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import FoundationIcon from '@mui/icons-material/Foundation';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ContactsIcon from '@mui/icons-material/Contacts';
import MoneyIcon from '@mui/icons-material/Money';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import { useLocation, useNavigate } from 'react-router-dom';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import NoteAltIcon from '@mui/icons-material/NoteAlt';




const array1=[
  
  {"text":"Dashboard", "icon":<FoundationIcon/>, "path":"/"},
  {"text":"Ajouter une activité", "icon":<AddReactionIcon/>, "path":"/new"},
  {"text":"Mes activités", "icon":<FormatListNumberedIcon/>, "path":"/team"},
  // {"text":"Ajouter un membre ", "icon":<PermContactCalendarOutlinedIcon/>, "path":"/nouveau"},
  // {"text":"Team infos", "icon":<ContactsIcon />, "path":"/infos"},


];

const array2=[
  

  // {"text":"Calendrier", "icon":<CalendarMonthIcon/>, "path":"/calendar"},

    {"text":"Mes notes", "icon":<NoteAltIcon/>, "path":"/memo"},

   

   {"text":"Pépites optimistes", "icon":<AutoStoriesOutlinedIcon/>, "path":"/support"},




];

const array3=[

    {"text":"Budget Bien-être", "icon":<MoneyIcon />, "path":"/budget"},

    {"text":"Diagramme à bandes", "icon":<BarChartOutlinedIcon/>, "path":"/barpage"},
    {"text":"Diagramme à tartes", "icon":<PieChartOutlineIcon/>, "path":"/piechart"},
    {"text":"Graphique de lignes", "icon":< StackedLineChartIcon />, "path":"/linechart"},
    // {"text":"Graphique en secteur", "icon":< TravelExploreIcon />, "path":"/geo"},






];






const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });


  

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));



  

const Sidebar = ({open,handleDrawerClose}) => {


  //mes hookes
    const theme = useTheme();
    const navigate=useNavigate();
    const locactu=useLocation();

    return (
        <div>

<Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />


        <Avatar sx={{transition:" 0.5" , mx:"auto", width:open?90:40, height:open? 90:40, my:1, border:"2px solid pink"}} alt="Remy Sharp" src="./vecto.png" />
<Typography align='center'  sx={{ color: theme.palette.magie.main, transition:" 0.5" ,fontSize:open? 16:0}}>Lili Rose</Typography>
<Typography align='center'  sx={{transition:" 0.5" ,fontSize:open? 12:0}} >Diary Board</Typography>

        <Divider />
        <List>
          {array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>

<Tooltip title={open?null:item.text}>
   <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,                                      
                  background:locactu.pathname===item.path ? theme.palette.magie.main:null
                }} 
                onClick={
                  () => {
                    navigate(item.path)
                    

                  }
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>

</Tooltip>

             




            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>



<Tooltip title={open?null:item.text}>

<ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}     onClick={
                  () => {
                    navigate(item.path)
                    
                  }
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>

</Tooltip>
              



            </ListItem>
          ))}
        </List>


        <Divider />
        <List>
          {array3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>


<Tooltip title={open?null:item.text}>

   <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}     onClick={
                  () => {
                    navigate(item.path)
                    
                  }
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>

</Tooltip>

           


            </ListItem>
          ))}
        </List>










      


      




     





      </Drawer>
            
        </div>
    );
}

export default Sidebar;
