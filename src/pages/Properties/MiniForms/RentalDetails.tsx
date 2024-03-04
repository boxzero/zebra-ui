import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, TextField, FormControlLabel, Checkbox } from '@mui/material';
import React, { ReactNode, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



const RentalDetails = () => {


  const propertyAvailableTypes = [
    {
      value: "rent",
      label: "Rent"
    },
    {
      value: "lease",
      label: "Lease"
    }
  ];


  const [propertyAvailableType, setpropertyAvailableType] = useState('');
  const propertyAvailableTypeHandleChange = (event: SelectChangeEvent) => {
    setpropertyAvailableType(event.target.value);
  }

  return (
    <>


    <div>   
     <FormControl sx={{ m: 1 }}>
     <InputLabel id="demo-select-small">Property For</InputLabel>
      <Select sx={{width: 500}}
        labelId="demo-select-small"
        id="demo-select-small"
        value={propertyAvailableType}
        label="ApartmentType"
        onChange={propertyAvailableTypeHandleChange}
      >
        {propertyAvailableTypes.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
        
      </Select></FormControl>
      </div>

      <br />
      <br />
      <br />
      <div>
        <FormControl sx={{ m: 1}} >
    
          <TextField
                  label="Expected Rent"
                  id="outlined-start-adornment"
                  sx={{width: 500}}
                  
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon/></InputAdornment>,
                    endAdornment: <InputAdornment position="end">/Month</InputAdornment>
                  }}

                /> 

        </FormControl>

        <FormControl sx={{ m: 1}} >
    
          <TextField
                  label="Expected Deposit"
                  id="outlined-start-adornment"
                  sx={{width: 500}}
                  
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon/></InputAdornment>,
                  }}
                /> 

        </FormControl>

        <br/>
        <br/>
        <br/>

        <FormControl sx={{m:1}}>
        <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Rent Negotiable" />
        </FormControl>
      </div>  
    </>
  )
}

export default RentalDetails;