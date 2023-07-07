import { Box, Button, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useState } from "react";


type Props = {}



const PropertyDetails = (props: Props) => {

    const apartmentTypes = [
        {
          value: "apartment",
          label: "Apartment"
        },
        {
          value: "independentvilla",
          label: "Independent Villa"
        },
        {
          value: "gatedcommunityvilla",
          label: "Gated Community Villa"
        }
      ];

      const bhkTypes = [
        {
          value: "1rk",
          label: "1 RK"
        },
        {
          value: "1bhk",
          label: "1 BHK"
        },
        {
          value: "2bhk",
          label: "2 BHK"
        },
        {
          value: "3bhk",
          label: "3 BHK"
        },
        {
          value: "4bhk",
          label: "4 BHK"
        },
        {
          value: "4plusbhk",
          label: "4+ BHK"
        }
      ];  

      const propertyAges = [
        {
          value: "lessoneyear",
          label: "Less than a year"
        },
        {
          value: "onetothreeyears",
          label: "1 to 3 years"
        },
        {
          value: "threetofiveyears",
          label: "3 to 5 years"
        },
        {
          value: "fivetotenyears",
          label: "5 to 10 years"
        },
        {
          value: "morethantenyears",
          label: "More than 10 years"
        }
      ];
      
      const facings = [
        {
          value: "North",
          label: "North"
        },
        {
          value: "South",
          label: "South"
        },
        {
          value: "East",
          label: "East"
        },
        {
          value: "West",
          label: "West"
        },
        {
          value: "North-East",
          label: "North-East"
        },
        {
          value: "South-East",
          label: "South-East"
        },
        {
          value: "North-West",
          label: "North-West"
        },
        {
          value: "South-West",
          label: "South-West"
        },
        {
          value: "Don't Know",
          label: "Don't Know"
        }
      ];  
    const floors = Array(0);

    for(var i =0;i<=100;i++){
    floors.push({value : i,label: i});
    }  
    const [apartmentType, setApartmentType] = useState('');
    const [bhkType,setBhkType] = useState('');
    const [floor,setFloor] = useState('');
    const [totalfloor,setTotalFloor] = useState('');
    const [propertyAge,setPropertyAge] = useState('');
    const [facing, setFacing] = useState('');
    const apartmentTypeHandleChange = (event: SelectChangeEvent) => {
        setApartmentType(event.target.value);
      }
    const bhkTypeHandleChange = (event: SelectChangeEvent) => {
        setBhkType(event.target.value);
    }

    const setFloorHandleChange = (event: SelectChangeEvent) => {
        setFloor(event.target.value);
    }

    const setTotalFloorHandleChange = (event: SelectChangeEvent) => {
        setTotalFloor(event.target.value);
    }

    const setPropertyAgeChange = (event: SelectChangeEvent) => {
        setPropertyAge(event.target.value);
    }

    const setFacingChange = (event: SelectChangeEvent) => {
        setFacing(event.target.value);
    }
    return (
      <>
     <div>   
     <FormControl sx={{ m: 1 }}>
     <InputLabel id="demo-select-small">Apartment Type</InputLabel>
      <Select sx={{width: 300}}
        labelId="demo-select-small"
        id="demo-select-small"
        value={apartmentType}
        label="ApartmentType"
        onChange={apartmentTypeHandleChange}
      >
        {apartmentTypes.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
        
      </Select></FormControl>
      </div>  
      <br />
    <br />
    <br /> 
    {/* <Box sx={{justifyContent: 'flex-end'}}>    */}
    <div>   
    <FormControl sx={{ m: 1 }}>
      <InputLabel id="bhk-Type">BHK Type</InputLabel>
      <Select sx={{width: 300}}
        labelId="bhk-Type"
        id="bhk-Type"
        value={bhkType}
        label="BHKType"
        onChange={bhkTypeHandleChange}
      >
        {bhkTypes.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
        
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1 }}>
      <InputLabel id="bhk-Type">Floor</InputLabel>
      <Select sx={{width: 300}}
        labelId="floor"
        id="floor"
        value={floor}
        label="floor"
        onChange={setFloorHandleChange}
      >
        {floors.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
        
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1 }}>
      <InputLabel id="total-floors">Total Floors</InputLabel>
      <Select sx={{width: 300}}
        labelId="total-floors"
        id="total-floors"
        value={totalfloor}
        label="totalfloor"
        onChange={setTotalFloorHandleChange}
      >
        {floors.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
        
      </Select>
    </FormControl>    
   </div>
   <br />
   <br />
   <br /> 
   <div>
   <FormControl sx={{ m: 1 }}>
      <InputLabel id="property-age">Property Age</InputLabel>
      <Select sx={{width: 300}}
        labelId="property-age"
        id="property-age"
        value={propertyAge}
        label="propertyAge"
        onChange={setPropertyAgeChange}
      >
        {propertyAges.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
        
      </Select>
    </FormControl>

    <FormControl sx={{ m: 1 }}>
      <InputLabel id="facing">Facing</InputLabel>
      <Select sx={{width: 300}}
        labelId="property-age"
        id="property-age"
        value={facing}
        label="propertyAge"
        onChange={setFacingChange}
      >
        {facings.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
        
      </Select>
    </FormControl>
   </div> 

   <br />
    <br />
    <br /> 

   <div>
   <FormControl sx={{ m: 1}} >
   
   <TextField
          label="Built Up Area"
          id="outlined-start-adornment"
          sx={{width: 300}}
          InputProps={{
            endAdornment: <InputAdornment position="end">Sq.Ft.</InputAdornment>,
          }}
        /> 

    </FormControl>
    </div> 
    
    
       
   
    </>
    )
  }

export default PropertyDetails;