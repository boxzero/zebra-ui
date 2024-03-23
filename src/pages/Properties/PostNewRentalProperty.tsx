import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent,Tabs,TextField, Typography } from '@mui/material';
import React, {useState} from 'react'

import Tab from '@mui/material/Tab';
import PropertyDetails from './MiniForms/PropertyDetails';
import LocalityDetails from './MiniForms/LocalityDetails';
import RentalDetails from './MiniForms/RentalDetails';

import SendIcon from '@mui/icons-material/Send';
import Amenities from './MiniForms/Amenities';
import Images from './MiniForms/Images';
import Schedule from './MiniForms/Schedule';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import OwnerDetails from './MiniForms/OwnerDetails';






const PostNewRentalProperty = () => {

  //const [apartmentType, setApartmentType] = useState('');
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("Changed", newValue);
    setValue(newValue);
  };





  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    
   <>
   <Box sx={{ width: '100%' }}>
   <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
   <Tabs value={value} onChange={handleChange} aria-label="lab API tabs example">
       <Tab label="Property Details" {...a11yProps(0)}/>
        <Tab label="Locality Details" {...a11yProps(1)}/>
        <Tab label="Rental Details" {...a11yProps(2)}/>
         <Tab label="Owner Details" {...a11yProps(3)}/>
        <Tab label="Amenities" {...a11yProps(4)}/>
        <Tab label="Images" {...a11yProps(5)}/>
        <Tab label="Schedule" {...a11yProps(6)}/>
   </Tabs>     
  </Box>
  <TabPanel value={value} index={0}>
     <PropertyDetails/>
     <Grid container justifyContent="flex-end">
    <FormControl sx={{ m: 1}} >
    <Button sx={{ width: 160, height: 50}} variant="contained" endIcon={<NavigateNextIcon />}
    onClick={(e) => handleChange(e, value+1) }
    >
         Next
    </Button></FormControl>
    </Grid>
  </TabPanel>
   
  <TabPanel value={value} index={1}>
     <LocalityDetails/>
    
    <Grid container spacing={12} justifyContent={'space-between'}>  
    
    <Grid item> 
    <Button sx={{ width: 160, height: 50}} variant="contained" endIcon={<NavigateBeforeIcon />}
    onClick={(e) => handleChange(e, value-1) }
    >
         Previous
    </Button> 
    </Grid>

    <Grid item>
    <Button sx={{ width: 160, height: 50}} variant="contained" startIcon={<NavigateNextIcon />}
    onClick={(e) => handleChange(e, value+1) }
    >
         Next
    </Button>
    </Grid>
    
    </Grid>

    
  </TabPanel>

   <TabPanel value={value} index={2}>
     <RentalDetails/>
    
    <Grid container spacing={12} justifyContent={'space-between'}>  
    
    <Grid item> 
    <Button sx={{ width: 160, height: 50}} variant="contained" endIcon={<NavigateBeforeIcon />}
    onClick={(e) => handleChange(e, value-1) }
    >
         Previous
    </Button> 
    </Grid>

    <Grid item>
    <Button sx={{ width: 160, height: 50}} variant="contained" startIcon={<NavigateNextIcon />}
    onClick={(e) => handleChange(e, value+1) }
    >
         Next
    </Button>
    </Grid>
    
    </Grid>

    
  </TabPanel>

  <TabPanel value={value} index={4}>
     <Amenities/>
    
    <Grid container spacing={12} justifyContent={'space-between'}>  
    
    <Grid item> 
    <Button sx={{ width: 160, height: 50}} variant="contained" endIcon={<NavigateBeforeIcon />}
    onClick={(e) => handleChange(e, value-1) }
    >
         Previous
    </Button> 
    </Grid>

    <Grid item>
    <Button sx={{ width: 160, height: 50}} variant="contained" startIcon={<NavigateNextIcon />}
    onClick={(e) => handleChange(e, value+1) }
    >
         Next
    </Button>
    </Grid>
    
    </Grid>

    
  </TabPanel>


  <TabPanel value={value} index={5}>
     <Images/>
       <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
    <br/>
  <br/>
  <br/>
  <br/>
   <br/>
  
 

    
    <Grid container spacing={12} justifyContent={'space-between'}>  
    
    <Grid item> 
    <Button sx={{ width: 160, height: 50}} variant="contained" endIcon={<NavigateBeforeIcon />}
    onClick={(e) => handleChange(e, value-1) }
    >
         Previous
    </Button> 
    </Grid>

    <Grid item>
    <Button sx={{ width: 160, height: 50}} variant="contained" startIcon={<NavigateNextIcon />}
    onClick={(e) => handleChange(e, value+1) }
    >
         Next
    </Button>
    </Grid>
    
    </Grid>

    
  </TabPanel>

   <TabPanel value={value} index={6}>
     <Schedule/>
      <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
    <br/>


 

    

    
    <Grid item> 
    <Button sx={{ width: 160, height: 50}} variant="contained" endIcon={<NavigateBeforeIcon />}
    onClick={(e) => handleChange(e, value-1) }
    >
         Previous
    </Button> 
    </Grid>

 
    
   

    
  </TabPanel>

   <TabPanel value={value} index={3}>
     <OwnerDetails/>
    
    <Grid container spacing={12} justifyContent={'space-between'}>  
    
    <Grid item> 
    <Button sx={{ width: 160, height: 50}} variant="contained" endIcon={<NavigateBeforeIcon />}
    onClick={(e) => handleChange(e, value-1) }
    >
         Previous
    </Button> 
    </Grid>

    <Grid item>
    <Button sx={{ width: 160, height: 50}} variant="contained" startIcon={<NavigateNextIcon />}
    onClick={(e) => handleChange(e, value+1) }
    >
         Next
    </Button>
    </Grid>
    
    </Grid>

    
  </TabPanel>

  </Box>  

  </>

    
  )
}

export default PostNewRentalProperty;