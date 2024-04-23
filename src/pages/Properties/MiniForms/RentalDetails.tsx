import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Autocomplete, TextField, FormControlLabel, Checkbox, Grid, Button } from '@mui/material';
import React, { ReactNode, useState, ChangeEvent } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';

import { TextFieldProps } from '@mui/material/TextField';


import { Box } from '@mui/material'


// import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import { ErrorSharp } from '@mui/icons-material';
interface PreferredTenants {
  anyone: boolean;
  family: boolean;
  bachelorFemale: boolean;
  bachelorMale: boolean;
  company: boolean;
 }
interface Props {
  onNextTab: () => void
  OnPrevTab: () => void
  formData: {
    propertyAvailable: string,
    ExpectedRent: string,
    ExpectedDeposit: string,
    monthlyMaintenence: string,
    AvailableFrom: string,
    furniture: string,
    parking: string,
    Description: string,
    expectedMaintenance: string,
  },
  handleChange: (newData: any) => void
  checkBox:PreferredTenants,
  setCheckBox:React.Dispatch<React.SetStateAction<PreferredTenants>>
}

const RentalDetails = (props: Props) => {

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

  const maintenance = [
    {
      value: "1",
      label: "Maintenance Included"
    },
    {
      value: "2",
      label: "Maintenance Extra"
    }
  ];

  const furnitures = [
    {
      value: "1",
      label: "Fully furnished"
    },
    {
      value: "2",
      label: "Semi-furnished"
    },
    {
      value: "3",
      label: "Unfurnished"
    }
  ];

  const park = [
    {
      value: "1",
      label: "Bike"
    },
    {
      value: "2",
      label: "Car"
    },
    {
      value: "3",
      label: "Both"
    },
    {
      value: "4",
      label: "None"
    }
  ];
  const [formData, setFormData] = useState({
    propertyAvailable: '',
    ExpectedRent: '',
    ExpectedDeposit: '',
    monthlyMaintenence: '',
    AvailableFrom: '',
    furniture: '',
    parking: '',
    Description: '',
    preferredTenanats: '',
    expectedMaintenance: '',
    preferredTenants: []
  });
  const [errors, setErrors] = useState({
    propertyAvailable: '',
    ExpectedRent: '',
    ExpectedDeposit: '',
    monthlyMaintenence: '',
    AvailableFrom: '',
    furniture: '',
    parking: '',
    Description: '',
  })
  

  // Function to handle checkbox changes
  const handleCheckboxChange = (key:keyof PreferredTenants,checked:boolean) => {
    const updatedCheckBox = {
      ...props.checkBox,
      [key]: checked,
    };
    // Update the state using setCheckBox prop
    props.setCheckBox(updatedCheckBox);
  };
  
  
  const [isValid, setIsValid] = useState(false);
  const handleChange = (event: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name as string]: value })
    props.handleChange({ ...props.formData, [name as string]: value })
    
    setIsValid(
      formData.propertyAvailable !== '' &&
      formData.ExpectedRent !== '' &&
      formData.ExpectedDeposit !== '' &&
      formData.monthlyMaintenence !== '' &&

      formData.furniture !== '' &&
      formData.parking !== '' &&
      formData.Description !== '' 
      
    )
    console.log({formData})
  }
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setFormData({ ...formData, AvailableFrom: date.toISOString() });
      props.handleChange({ ...props.formData, AvailableFrom: date });
    } else {
      setFormData({ ...formData, AvailableFrom: '' });
      props.handleChange({ ...props.formData, AvailableFrom: '' });
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newErrors = { ...errors };

    let isValidForm = true;
    if (!props.formData.propertyAvailable) {
      newErrors.propertyAvailable = 'City is required';
      isValidForm = false;
    }
    if (!props.formData.ExpectedRent) {
      newErrors.ExpectedRent = 'Locality is required';
      isValidForm = false;
    }
    if (!props.formData.ExpectedDeposit) {
      newErrors.ExpectedDeposit = 'Landmark is required';
      isValidForm = false;
    }
    if (!props.formData.monthlyMaintenence) {
      newErrors.monthlyMaintenence = 'Landmark is required';
      isValidForm = false;
    }  if (!props.formData.furniture) {
      newErrors.furniture = 'Landmark is required';
      isValidForm = false;
    } if (!props.formData.parking) {
      newErrors.parking = 'Landmark is required';
      isValidForm = false;
    }
    if (!props.formData.Description) {
      newErrors.Description = 'Description is required'
      isValidForm = false
    }
    console.log("Formd data is ", formData)
    setErrors(newErrors);
    if (isValidForm) {

      props.onNextTab();
    }
    else {
      alert("Fill all the details")
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-select-small">Property For</InputLabel>
          <Select sx={{ width: 500 }}
            labelId="demo-select-small"
            id="demo-select-small"
            value={props.formData.propertyAvailable}
            label="propertyAvailable"
            name='propertyAvailable'
            onChange={handleChange}
            error={!!errors.propertyAvailable}
          >
            {propertyAvailableTypes.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

          </Select></FormControl>
      </div>

      <br />
      <br />

      <div>


        <FormControl sx={{ m: 1 }} >

          <TextField
            label="Expected Rent"
            id="outlined-start-adornment"
            sx={{ width: 500 }}
            name='ExpectedRent'
            value={props.formData.ExpectedRent}
            onChange={handleChange}
            error={!!errors.ExpectedRent}
            InputProps={{
              startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
              endAdornment: <InputAdornment position="end">/Month</InputAdornment>
            }}

          />


        </FormControl>

        <FormControl sx={{ m: 1 }} >

          <TextField
            label="Expected Deposit"
            name='ExpectedDeposit'
            value={props.formData.ExpectedDeposit}
            onChange={handleChange}
            id="outlined-start-adornment"
            sx={{ width: 500 }}
            error={!!errors.ExpectedDeposit}

            InputProps={{
              startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
            }}
          />

        </FormControl>

        <br />
        <br />
        <FormControl sx={{ m: 1 }}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Rent Negotiable" />




          <div>

            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-select-small">Monthly Maintenance</InputLabel>
              <Select sx={{ width: 400 }}
                labelId="demo-select-small"
                id="demo-select-small"
                name='monthlyMaintenence'
                value={props.formData.monthlyMaintenence}
                label="ApartmentType"
                error={!!errors.monthlyMaintenence}
                onChange={handleChange}
              >
                {maintenance.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

              </Select>
            </FormControl>
            {props.formData.monthlyMaintenence==='2' && (<FormControl sx={{ m: 1 }}>

              <TextField
                label="Expected Maintenance"
                id="outlined-start-adornment"
                sx={{ width: 500 }}
                value={props.formData.expectedMaintenance}
                onChange={handleChange}
                name='expectedMaintenance'
                InputProps={{
                  startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
                  endAdornment: <InputAdornment position="end">/Month</InputAdornment>
                }}
              />



            </FormControl>)}



          </div>

        </FormControl>
      </div>






      <Box sx={{ m: 2 }}  >
        <LocalizationProvider dateAdapter={AdapterDayjs} >
          <DatePicker
            label="Available From "
            name='AvailableFrom'
            value={props.formData.AvailableFrom ? new Date(props.formData.AvailableFrom) : null}
            onChange={handleDateChange}


          />
        </LocalizationProvider>
      </Box>
      <br />





      <FormControl component="fieldset" sx={{ m: 1 }}  >
        <FormLabel component="legend" required>Preferred Tenants</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel sx={{ paddingRight: '150px' }}
            value="top"
            control={<Checkbox name='anyone' checked={props.checkBox.anyone} onChange={(e) => handleCheckboxChange('anyone', e.target.checked)}  />}
            label="Anyone"
            labelPlacement="end"
          />
          <FormControlLabel sx={{ paddingRight: '150px' }}
            value="start"
            control={<Checkbox key='family' checked={props.checkBox.family} onChange={(e) => handleCheckboxChange('family', e.target.checked)} name="family" />}
            label="Family"
            labelPlacement="end"
          />
          <FormControlLabel sx={{ paddingRight: '150px' }}
            value="bottom"
            control={<Checkbox  checked={props.checkBox.bachelorFemale} onChange={(e) => handleCheckboxChange('bachelorFemale', e.target.checked)} name="bachelorFemale"/>}
            label="Bachelor Female"
            labelPlacement="end"
          />
          <FormControlLabel sx={{ paddingRight: '150px' }}
            value="end"
            control={<Checkbox  checked={props.checkBox.bachelorMale} onChange={(e) => handleCheckboxChange('bachelorMale', e.target.checked)} name="bachelorMale"/>}
            label="Bachelor Male"
            labelPlacement="end"
          />
          <FormControlLabel sx={{ paddingRight: '150px' }}
            value="end"
            control={<Checkbox checked={props.checkBox.company} onChange={(e) => handleCheckboxChange('company', e.target.checked)} name="company" />}
            label="Comapny"
            labelPlacement="end"
          />

        </FormGroup>
      </FormControl>



      <br />

      <div>

        <div>
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-select-small">Furnishing</InputLabel>
            <Select sx={{ width: 500 }}

              labelId="demo-select-small"
              id="demo-select-small"
              name='furniture'
              value={props.formData.furniture}
              onChange={handleChange}
              error={!!errors.furniture}
              label="Furniture"

            >
              {furnitures.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
            </Select>
          </FormControl>



          <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-select-small">Parking</InputLabel>
            <Select sx={{ width: 500 }}

              labelId="demo-select-small"
              id="demo-select-small"
              name='parking'
              value={props.formData.parking}
              label="ApartmentType"
              onChange={handleChange}
              error={!!errors.parking}

            >
              {park.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
            </Select>
          </FormControl>




        </div>
        <br />
        <div>
          <TextField sx={{ width: 1020, m: 1 }}
            multiline
            label='Decription'
            name='Description'
            value={props.formData.Description}
            onChange={handleChange}
            rows={3}
            error={!!errors.Description}
            variant='outlined' />
        </div>

        <br />
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

export default RentalDetails;