
import React from 'react';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import { Typography,Box } from "@mui/material";
import { rows } from './data';
import { columns } from './data';



const Infos = () => {
    return (
        <Box style={{ height: 600, width: '98%',mx:'auto' }}>
      <DataGrid 
    
     checkboxSelection

      slots={{
        toolbar: GridToolbar,
      }}
      
      rows={rows} columns={columns}
      

      
      
      
      
      />
  
    </Box>
    );
}

export default Infos;
