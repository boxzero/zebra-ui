import React from 'react'
import { Grid ,Box} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Autocomplete ,TextField, FormControlLabel, Checkbox,Stack,Chip,Button,ButtonGroup,Typography} from '@mui/material';
import {Tooltip} from '@mui/material';
import ElevatorIcon from '@mui/icons-material/Elevator';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BalconyIcon from '@mui/icons-material/Balcony';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import YardIcon from '@mui/icons-material/Yard';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ManIcon from '@mui/icons-material/Man';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import WifiIcon from '@mui/icons-material/Wifi';
import HouseIcon from '@mui/icons-material/House';
import PoolIcon from '@mui/icons-material/Pool';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PestControlRodentIcon from '@mui/icons-material/PestControlRodent';
import PowerIcon from '@mui/icons-material/Power';
import { useState } from 'react';
import { green, red } from '@mui/material/colors';

const Amenities = ()=> {


   const waterSupply = [
    {
      value: "corporation",
      label: "Corporation"
    },
    {
      value: "borewell",
      label: "Borewell"
    },
    {
      value: "both",
      label: "Both"
    },

  ];

  const properties = [
        {
            value: "1",
            label: "Need help"
        },
        {
            value:"2",
            label:"I will show"
        },
        {
            value:"3",
            label:"Neighbours"
        },
        {
            value:"4",
            label:"Friends/Relatives"
        },
        {
            value:"5",
            label:"Security"
        },
        {
            value:"6",
            label:"Tenants"
        },
        {
            value:"7",
            label:"Others"
        },
    ];

    
  const [is1YesSelected, setIs1YesSelected] = useState(false);
  const [is1NoSelected, setIs1NoSelected] = useState(false);

  const handleYesClick = () => {
    setIs1YesSelected(true);
    setIs1NoSelected(false);
  };

  const handleNoClick = () => {
    setIs1YesSelected(false);
    setIs1NoSelected(true);
  };

  const [is2YesSelected, setIs2YesSelected] = useState(false);
  const [is2NoSelected, setIs2NoSelected] = useState(false);

  const handle2YesClick = () => {
    setIs2YesSelected(true);
    setIs2NoSelected(false);
  };

  const handle2NoClick = () => {
    setIs2YesSelected(false);
    setIs2NoSelected(true);
  };

  const [is3YesSelected, setIs3YesSelected] = useState(false);
  const [is3NoSelected, setIs3NoSelected] = useState(false);

  const handle3YesClick = () => {
    setIs3YesSelected(true);
    setIs3NoSelected(false);
  };

  const handle3NoClick = () => {
    setIs3YesSelected(false);
    setIs3NoSelected(true);
  };



  const [water,setWater] = useState('');

   const [property, setProperty] = useState('');
  const propertyHandleChange = (event: SelectChangeEvent) => {
    setProperty(event.target.value);
  }

     const waterChangeHandler = (event: SelectChangeEvent) => {
        setWater(event.target.value);
    }

  return (
    <div>

      <FormLabel sx = {{m:1,fontSize:'20px'}} component="legend">Provide additional details about your property to get maximum visibilty</FormLabel>

      <Grid container my = {4} alignItems="center" sx={{m:1}}>
        <Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

    <TextField 
    

          id="standard-number"
          label="Bathroom(s)"
          type="number"
          required
          
          InputProps={{
                    startAdornment: <InputAdornment position="start"><BathtubIcon/></InputAdornment>,
                  
                  }}

                  sx={{height:'20px'}}

          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"

        />
        </Grid>

        <Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

    <TextField

          id="standard-number"
          label="Balcony"
          type="number"
          InputProps={{
                    startAdornment: <InputAdornment position="start"><BalconyIcon/></InputAdornment>,
                  
                  }}

                  sx={{height:'20px'}}

          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"

        />
        </Grid>

         <div>
            <FormControl sx = {{m:1}}>
            <InputLabel id="demo-select-small">Water Supply</InputLabel>
                <Select sx={{width: 300}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={water}
                    label="ApartmentType"
                    onChange={waterChangeHandler}
                >
                    {waterSupply.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                    
                </Select>
            </FormControl>
            </div>

        
        </Grid>

        <br/>
        <Box sx={{ display: 'flex', gap: 11 }} >

   <Box sx={{mx:1,padding: 2, borderRadius: 2, width:'350px',border: '1px solid #000'  }}>
      <Box sx={{ display: 'flex',justifyContent: 'left'}}>
        <Typography variant="body1" sx={{ marginRight: '30px',marginTop:'10px'}}>Gym</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
      <Button 
      sx={{ width: '100px', height: '50px',border: '1px solid #000',color:'#000' }}
        variant="outlined"
        style={{ backgroundColor: is1YesSelected ? green[500] : undefined, color: is1YesSelected ? 'white' : undefined }}
        onClick={handleYesClick}
      >
        Yes
      </Button>
      <Button
      sx={{ width: '100px', height: '50px',border: '1px solid #000',color:'#000' }}
        variant="outlined"
        style={{ backgroundColor: is1NoSelected ? red[500] : undefined, color: is1NoSelected ? 'white' : undefined }}
        onClick={handleNoClick}
      >
        No
      </Button>
    </Box>
      </Box>
    </Box>

     <Box sx={{ mx:1, padding: 2, borderRadius: 2, width:'350px' ,border: '1px solid #000' }}>
      <Box sx={{ display: 'flex',justifyContent: 'left' }}>
        <Typography variant="body1" sx={{ marginRight: '10px' }}>Non-Veg allowed</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
      <Button 
      sx={{ width: '100px', height: '50px',border: '1px solid #000',color:'#000' }}
        variant="outlined"
        style={{ backgroundColor: is2YesSelected ? green[500] : undefined, color: is2YesSelected ? 'white' : undefined }}
        onClick={handle2YesClick}
      >
        Yes
      </Button>
      <Button
      sx={{ width: '100px', height: '50px',border: '1px solid #000',color:'#000' }}
        variant="outlined"
        style={{ backgroundColor: is2NoSelected ? red[500] : undefined, color: is2NoSelected ? 'white' : undefined }}
        onClick={handle2NoClick}
      >
        No
      </Button>
    </Box>
      </Box>
    </Box>

     <Box sx={{mx:1, padding: 2, borderRadius: 2, width:'350px',border: '1px solid #000'  }}>
      <Box sx={{ display: 'flex',justifyContent: 'left' }}>
        <Typography variant="body1" sx={{ marginRight: '10px' }}>Gated Security</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
      <Button 
      sx={{ width: '100px', height: '50px',border: '1px solid #000',color:'#000' }}
        variant="outlined"
        style={{ backgroundColor: is3YesSelected ? green[500] : undefined, color: is3YesSelected ? 'white' : undefined }}
        onClick={handle3YesClick}
      >
        Yes
      </Button>
      <Button
      sx={{ width: '100px', height: '50px',border: '1px solid #000',color:'#000' }}
        variant="outlined"
        style={{ backgroundColor: is3NoSelected ? red[500] : undefined, color: is3NoSelected ? 'white' : undefined }}
        onClick={handle3NoClick}
      >
        No
      </Button>
    </Box>
      </Box>
    </Box>
    </Box>
<Grid container my = {6} alignItems="center">
        <Grid item xs={3.5} sx={{m:1}}>

<FormControl sx = {{m:1}}>
            <InputLabel id="demo-select-small">Who will show the property</InputLabel>
                <Select sx={{width: 500}}
      
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={property}
                    label="Furniture"
                    onChange={propertyHandleChange}
                >
                    {properties.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                </Select>
               
            </FormControl>
             </Grid>

             <Grid item xs={5} sx={{m:1,paddingLeft:'443px'}}>
              
            <FormControl sx = {{m:1}}>
                <TextField
                        label="Contact Number"
                        id="outlined-start-adornment"
                        sx={{width: 300}}
                        
                        /> 
            </FormControl>   
         
             </Grid>

                </Grid>
            
         

      
       <FormLabel sx = {{m:1}} component="legend">Add Direction Tip for your tenants.. <Chip label="New" color="success" /></FormLabel>
       <br/>

    <Grid item sx = {{width:1195,m:1}}>
      <Tooltip sx={{ m: 1 }} title="Eg: Take road opposite to Amrita College..." arrow>
      
      <TextField label="Description" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth />
      </Tooltip>
    
     </Grid>
     <FormLabel sx = {{m:1,fontSize:'20px'}} component="legend">Select the available amenities</FormLabel>


    <Grid container my = {4}>
        <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <ElevatorIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Lift" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

        <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <LocalPhoneIcon />
          <FormControlLabel
            control={<Checkbox />}
          label="Intercom" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

            

        <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <YardIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Children Play Area" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

           <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <BedroomParentIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Servant Room" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

           <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <GasMeterIcon/>
          <FormControlLabel
            control={<Checkbox />}

          label="Gas Pipeline" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

          <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <AgricultureIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Rainwater Harvesting" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

          <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <ManIcon  />
          <FormControlLabel
            control={<Checkbox />}

          label="Housekeeping" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

         <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <DirectionsCarFilledIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Visitor Parking" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>
  <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <WifiIcon/>
          <FormControlLabel
            control={<Checkbox />}

          label="Internet Services" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

           <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <HouseIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Club House " 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

          <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <PoolIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Swimming Pool" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

          <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <FireExtinguisherIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Fire Safety" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

         <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <ShoppingCartIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Shopping centre" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

          <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <YardIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Park" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>

         <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <PestControlRodentIcon />
          <FormControlLabel
            control={<Checkbox />}

          label="Sewage Treatment Plant" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>
  <Grid item xs={6}>
        <Stack direction="row" spacing={0} alignItems="center">
          <PowerIcon/>
          <FormControlLabel
            control={<Checkbox />}

          label="Power Backup" 
          labelPlacement="end"
        />
        </Stack>
        </Grid>
    </Grid>

      


    </div>
  )
}

export default Amenities;