import React, { ChangeEvent } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Autocomplete, TextField, FormControlLabel, Checkbox, Button, Grid } from '@mui/material';
import {MuiTelInput} from 'mui-tel-input';
import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';

type Props = {
  onNextTab: () => void
  OnPrevTab:()=>void
  formData:{
    firstName: string,
    lastName: string,
    contactNumber: string,
    Email: string,
    Notes:string
  }
  handleChange:(newData:any)=>void;
}

function OwnerDetails(props: Props) {
  const [formData, setFormData] = useState((props.formData))
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    Email: '',
    Notes: ''
  })
  const [isValid, setIsValid] = useState(false);
  
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    props.handleChange({...props.formData,[name]:value})
    
    setIsValid(
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.contactNumber !== '' &&
      formData.Email !== '' &&
      formData.Notes !== ''
    )
  }
  const handleContactChange = (newContactNumber: string) => {
    setFormData({ ...formData, contactNumber: newContactNumber });
    props.handleChange({...props.formData,contactNumber:newContactNumber})
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newErrors = { ...errors };
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValidForm = true;
    if (!props.formData.firstName) {
      newErrors.firstName = 'First Nameis required';
      isValidForm = false;
    }
    if (!props.formData.lastName) {
      newErrors.lastName = 'BHK type is required';
      isValidForm = false;
    }
    if (!props.formData.contactNumber) {
      newErrors.contactNumber = 'No.of floors required';
      isValidForm = false;
    }
    if (!props.formData.Email ) {
      newErrors.Email = 'No.of total floors required';
      isValidForm = false;
    }
    if (!props.formData.Notes) {
      newErrors.Notes = 'propertyAge is required required';
      isValidForm = false;
    }



    setErrors(newErrors);
    if (isValidForm) {
      console.log("Formd data is ", formData)
      props.onNextTab();
    }
    else {
      alert("Fill all the details")
    }
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>


          <FormControl sx={{ m: 1 }}>
            <TextField
              label="First Name"
              name='firstName'
              value={props.formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              id="outlined-start-adornment"
              sx={{ width: 300 }}

            />
          </FormControl>

          <FormControl sx={{ m: 1 }}>
            <TextField
              label="Last Name"
              name='lastName'
              value={props.formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              id="outlined-start-adornment"
              sx={{ width: 300 }}

            />
          </FormControl>
        </div>
        <br />
        <div>
        <FormControl sx={{m:1}}>
         <MuiTelInput label='Phone' defaultCountry='IN' fullWidth value={props.formData.contactNumber} name='contactNumber' onChange={handleContactChange} error={!!errors.contactNumber} sx={{width: 300}}/>
      </FormControl>
        </div>
        <br />

        <div>
          <FormControl sx={{ m: 1 }}>
            <TextField
              label="Email Id"
              name='Email'
              value={props.formData.Email}
              onChange={handleChange}
              error={!!errors.Email}
              id="outlined-start-adornment"
              sx={{ width: 300 }}

            />
          </FormControl>
        </div>
        <br />

        <div>
          <TextField sx={{ width: 1020, m: 1 }}
            multiline
            label='Notes'
            name='Notes'
            value={props.formData.Notes}
            onChange={handleChange}
            error={!!errors.Notes}
            rows={3}
            variant='outlined' />
        </div>
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
      </form>


      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default OwnerDetails;