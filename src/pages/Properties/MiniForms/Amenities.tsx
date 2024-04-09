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
import { useState ,ChangeEvent} from 'react';
// import colorConfigs from "../../configs/colorConfigs";
import colorConfigs from '../../../configs/colorConfigs';
import { Description } from '@mui/icons-material';
type Props = {
  onNextTab: () => void
  OnPrevTab: () => void
}

const Amenities = (props:Props)=> {


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
  const SelectYesOrNo = [
    {
      value: "yes",
      label: "Yes"
    },
    {
      value: "no",
      label: "No"
    }

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

    const [formData,setFromData]=useState({
      Bathroom:'',
      Balcony:'',
      WaterSupply:'',
      Gym:'',
      NonVegAllowed:'',
      GatedSecurity:'',
      showProperty:'',
      Description:'',
      
    })
    const [errors, setErrors] = useState({
      Bathroom:'',
      Balcony:'',
      WaterSupply:'',
      Gym:'',
      NonVegAllowed:'',
      GatedSecurity:'',
      showProperty:'',
      Description:'',

  })
    const [isValid,setIsValid]=useState(false);
    const handleChange=(event:SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      const {name,value}=event.target;
      setFromData({...formData,[name as string]:value})
      setIsValid(
        formData.Bathroom!==''&&
        formData.Balcony!==''&&
        formData.WaterSupply!==''&&
        formData.Gym!==''&&
        formData.NonVegAllowed!==''&&
        formData.GatedSecurity!==''&&
        formData.showProperty!==''&& 
        formData.Description!==''
      )
    }
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
      let isValdiForm=true;
      event.preventDefault();
        let newErrors = { ...errors };
      if(!formData.Bathroom){
        newErrors.Bathroom='No of bathrooms are required'
        isValdiForm=false;
      }
      if(!formData.Balcony){
        newErrors.Balcony='No of Balcony are required'
        isValdiForm=false;
      }
      if(!formData.WaterSupply){
        newErrors.WaterSupply='WaterSupply is required'
        isValdiForm=false;
      }
      if(!formData.Gym){
        newErrors.Gym='Gym is required'
        isValdiForm=false;
      }
      if(!formData.NonVegAllowed){
        newErrors.NonVegAllowed='NonVegAllowed required'
        isValdiForm=false;
      }
      if(!formData.GatedSecurity){
        newErrors.GatedSecurity='GatedSecurity required'
        isValdiForm=false;
      }
      if(!formData.showProperty){
        newErrors.showProperty='showProperty required'
        isValdiForm=false;
      }
      if(!formData.Description){
        newErrors.Description='Description required'
        isValdiForm=false;
      }

      if(isValdiForm) props.onNextTab();
      else{
        alert('Fill all the details')
      }
    }
  const [water,setWater] = useState('');

   const [property, setProperty] = useState('');
  const propertyHandleChange = (event: SelectChangeEvent) => {
    setProperty(event.target.value);
  }

     const waterChangeHandler = (event: SelectChangeEvent) => {
        setWater(event.target.value);
    }

  return (
    <form onSubmit={handleSubmit}>

    <div>

      <FormLabel sx = {{m:1,fontSize:'20px'}} component="legend">Provide additional details about your property to get maximum visibilty</FormLabel>

      <Grid container my = {4} alignItems="center" sx={{m:1}}>
        <Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

        <TextField
            label="Bathrooms"
            value={formData.Bathroom}
            name='Bathroom'
            onChange={handleChange}

            id="outlined-start-adornment"
            sx={{ width: 300 }}
            
            
            InputProps={{
              startAdornment: <InputAdornment position="start"><BathtubIcon /></InputAdornment>,
              
            }}

          />
        </Grid>

        <Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

        <TextField
            label="Balcony"
            id="outlined-start-adornment"
            sx={{ width: 300 }}
            value={formData.Balcony}
            name='Balcony'
            onChange={handleChange}
            InputProps={{
              startAdornment: <InputAdornment position="start"><BalconyIcon /></InputAdornment>,
              
            }}
            
            

          />
        </Grid>

         <div>
            <FormControl sx = {{m:1}}>
            <InputLabel id="demo-select-small">Water Supply</InputLabel>
                <Select sx={{width: 300}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={formData.WaterSupply}
                    label="ApartmentType"
                    name='WaterSupply'
                    onChange={handleChange}
                    
                >
                    {waterSupply.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                    
                </Select>
            </FormControl>
            </div>

        
        </Grid>

        <br/>

        <Grid container my = {4} alignItems="center">
        <Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

        <FormControl sx = {{m:1}}>
            <InputLabel id="demo-select-small">Gym</InputLabel>
                <Select sx={{width: 300}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={formData.Gym}
                    label="ApartmentType"
                    name='Gym'
                    onChange={handleChange}
                >
                    {SelectYesOrNo.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                    
                </Select>
            </FormControl>
</Grid>

<Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

<FormControl sx = {{m:1}}>
            <InputLabel id="demo-select-small">Non-veg Allowed</InputLabel>
                <Select sx={{width: 300}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={formData.NonVegAllowed}
                    label="ApartmentType"
                    name='NonVegAllowed'
                    onChange={handleChange}
                >
                    {SelectYesOrNo.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                    
                </Select>
            </FormControl>
</Grid>

<Grid item xs={3.5} sx={{m:1 , paddingRight:'150px'}}>

<FormControl sx = {{m:1}}>
            <InputLabel id="demo-select-small">Gated Security</InputLabel>
                <Select sx={{width: 300}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={formData.GatedSecurity}
                    label="ApartmentType"
                    name='GatedSecurity'
                    onChange={handleChange}
                >
                    {SelectYesOrNo.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                    
                </Select>
            </FormControl>
</Grid>
</Grid>
<Grid container my = {6} alignItems="center">
        <Grid item xs={3.5} sx={{m:1}}>

<FormControl sx = {{m:1}}>
            <InputLabel id="demo-select-small">Who will show the property</InputLabel>
                <Select sx={{width: 500}}
      
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={formData.showProperty}
                    label="Furniture"
                    name='showProperty'
                    onChange={handleChange}
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
      
      <TextField label="Description" name='Description' value={formData.Description} onChange={handleChange} multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth />
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
    <Grid container justifyContent="space-between">
                <FormControl sx={{ m: 1 }}>
                    <Button sx={{ width: 160, height: 50 }} variant="contained" onClick={props.OnPrevTab}>
                        Previous
                    </Button>
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                    <Button sx={{ width: 160, height: 50 }} variant="contained" type="submit">
                        Next
                    </Button>
                </FormControl>
            </Grid>

      


    </div>
    </form>
  )
}

export default Amenities;