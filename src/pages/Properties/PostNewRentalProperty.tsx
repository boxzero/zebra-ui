import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent,Tabs,TextField, Typography } from '@mui/material';
import React, {useState} from 'react'

import Tab from '@mui/material/Tab';
import PropertyDetails from './MiniForms/PropertyDetails';
import LocalityDetails from './MiniForms/LocalityDetails';

import SendIcon from '@mui/icons-material/Send';
import RentalDetails from './MiniForms/RentalDetails';
import Amenities from './MiniForms/Amenities';
import Images from './MiniForms/Images';
import Schedule from './MiniForms/Schedule';







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
        <Tab label="Amenities" {...a11yProps(3)}/>
        <Tab label="Images" {...a11yProps(4)}/>
        <Tab label="Schedule" {...a11yProps(5)}/>
   </Tabs>     
  </Box>
  <TabPanel value={value} index={0}>
     <PropertyDetails/>
     <Grid container justifyContent="flex-end">
    <FormControl sx={{ m: 1}} >
    <Button sx={{ width: 160, height: 50}} variant="contained" endIcon={<SendIcon />}
    onClick={(e) => handleChange(e, value+1) }
    >
         Next
    </Button></FormControl>
    </Grid>
  </TabPanel>
   
  <TabPanel value={value} index={1}>
     <LocalityDetails/>
  </TabPanel>

  <TabPanel value={value} index={2}>
    <RentalDetails/>
  </TabPanel>

  <TabPanel value={value} index={3}>
    <Amenities/>
  </TabPanel>
    

  <TabPanel value={value} index={4}>
    <Images/>
  </TabPanel>

  <TabPanel value={value} index={5}>
    <Schedule/>
  </TabPanel>

  </Box>  

  </>

    
  )
}

export default PostNewRentalProperty;