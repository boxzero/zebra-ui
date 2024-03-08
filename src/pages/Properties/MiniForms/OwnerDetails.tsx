import React from 'react';
import MuiPhoneNumber from 'mui-phone-number';
// import './App.css';
// import { FormControl ,TextField } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Autocomplete ,TextField, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';



function OwnerDetails() {


  return (
    <div> 
        <div>
         <FormControl sx = {{m:1}}>
                <TextField
                        label="First Name"
                        id="outlined-start-adornment"
                        sx={{width: 300}}
                        
                        /> 
            </FormControl>   

             <FormControl sx = {{m:1}}>
                <TextField
                        label="Last Name"
                        id="outlined-start-adornment"
                        sx={{width: 300}}
                        
                        /> 
            </FormControl>    
             </div>
             <br/>
             <div>
            <FormControl sx = {{m:1}}>
                <TextField
                        label="Contact Number"
                        id="outlined-start-adornment"
                        sx={{width: 300}}
                        
                        /> 
            </FormControl>   
            </div> 
             <br/>

              <div>
            <FormControl sx = {{m:1}}>
                <TextField
                        label="Email Id"
                        id="outlined-start-adornment"
                        sx={{width: 300}}
                        
                        /> 
            </FormControl>   
            </div> 
             <br/>

               <div>
      <TextField sx = {{width:1020,m:1}}
      multiline
      label = 'Notes'
      rows = {3}
      variant='outlined'/>
    </div>

    <FormControl component="fieldset" sx = {{m:1}}  >
        <FormLabel component="legend" required>Preferred Tenants</FormLabel>
        <FormGroup  aria-label="position" row>
        <FormControlLabel sx = {{paddingRight:'150px'}}
        value="top"
        control={<Checkbox />}
              label="Anyone"
              labelPlacement="end"
        />
        <FormControlLabel sx = {{paddingRight:'150px'}}
          value="start"
          control={<Checkbox />}
          label="Family"
          labelPlacement="end"
        />
        <FormControlLabel sx = {{paddingRight:'150px'}}
          value="bottom"
          control={<Checkbox />}
          label="Bachelor Female"
          labelPlacement="end"
        />
        <FormControlLabel sx = {{paddingRight:'150px'}}
          value="end"
          control={<Checkbox />}
          label="Bachelor Male"
          labelPlacement="end"
        />

        <FormControlLabel sx = {{paddingRight:'150px'}}
          value="end"
          control={<Checkbox />}
          label="Comapny"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>


    

    <br/>
     <br/>
      <br/>
       <br/>
        <br/>
     
    </div>
  );
}

export default OwnerDetails;