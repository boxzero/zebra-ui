import React from 'react'
import { Grid ,Box, Badge, Paper} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Autocomplete ,TextField, FormControlLabel, Checkbox,Stack,Chip,Button,ButtonGroup} from '@mui/material';
import {Tooltip} from '@mui/material';
// import { Badge } from '@mui/icons-material';
import ElevatorIcon from '@mui/icons-material/Elevator';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BalconyIcon from '@mui/icons-material/Balcony';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
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
// import colorConfigs from "../../configs/colorConfigs";
import colorConfigs from '../../../configs/colorConfigs';

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

        <Grid container my = {4} alignItems="center">
        <Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

        <Button sx={{color: colorConfigs.amenities.color,m:1}} variant="outlined" color = 'primary' >Gym

        <ButtonGroup  sx={{paddingLeft:'70px', paddingTop:'10px',paddingBottom:'10px'}}
  disableElevation
  variant="outlined"
  aria-label="Disabled button group"
  
>
  <Button sx={{color: colorConfigs.amenities.color}}  >Yes</Button>
  <Button sx={{color: colorConfigs.amenities.color}} >No</Button>
</ButtonGroup>


</Button>
</Grid>

<Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

        <Button sx={{color: colorConfigs.amenities.color,m:1}} variant="outlined" color = 'primary' > Non-Veg Allowed

        <ButtonGroup  sx={{paddingLeft:'70px', paddingTop:'10px',paddingBottom:'10px'}}
  disableElevation
  variant="outlined"
  aria-label="Disabled button group"
  
>
  <Button sx={{color: colorConfigs.amenities.color}}>Yes</Button>
  <Button sx={{color: colorConfigs.amenities.color}}>No</Button>
</ButtonGroup>


</Button>
</Grid>

<Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

        <Button  sx={{color: colorConfigs.amenities.color,m:1}} variant="outlined" color = 'primary'  >Gated Security

        <ButtonGroup  sx={{paddingLeft:'70px', paddingTop:'10px',paddingBottom:'10px'}}
  disableElevation
  variant="outlined"
  aria-label="Disabled button group"
  
>
  <Button sx={{color: colorConfigs.amenities.color}}>Yes</Button>
  <Button sx={{color: colorConfigs.amenities.color}}>No</Button>
</ButtonGroup>


</Button>
</Grid>
</Grid>
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