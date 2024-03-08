import React from 'react'
import { Grid ,Box, Tooltip} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Autocomplete ,TextField, FormControlLabel, Checkbox } from '@mui/material';
import ElevatorIcon from '@mui/icons-material/Elevator';

const Amenities = ()=> {
  return (
    <div>Amenities

    <Grid container my = {4}>
      <Grid item xs = {6}>
        <Box p={2} >
           <ElevatorIcon sx = {{marginTop:'4px'}}/>
          
            <FormControlLabel sx = {{paddingRight:'150px'}}
          value="end"
          control={<Checkbox /> } 
          label="Lift" 
          labelPlacement="end"
        />
         


        </Box>
      </Grid>

        <Grid item xs = {6}>
        <Box p={2}>
          Item 1
        </Box>
      </Grid>

        <Grid item xs = {6}>
        <Box p={2}>
          Item 1
        </Box>
      </Grid>

        <Grid item xs = {6}>
        <Box p={2}>
          Item 1
        </Box>
      </Grid>

        <Grid item xs = {6}>
        <Box p={2}>
          Item 1
        </Box>
      </Grid>

        <Grid item xs = {6}>
        <Box p={2}>
        
          Item 1
          
        </Box>
      </Grid>

    </Grid>

    <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
     </Grid>
    </div>
  )
}

export default Amenities;