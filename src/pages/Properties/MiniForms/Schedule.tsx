import React, { useState, ChangeEvent } from 'react';
import { Box, Button, Container, Typography, Avatar, Grid, IconButton, MenuItem, SelectChangeEvent, Menu, FormControl, InputLabel, Select, FormLabel, InputAdornment } from '@mui/material';
import { Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

type Props = {
  onNextTab: () => void
  OnPrevTab: () => void
  formData:{
    Availability: string,
    StartTime: string,
    EndTime: string
  }
  handleChange:(newData:any)=>void;
}


const Schedule = (props: Props) => {

  
  const [formData, setFormData] = useState(props.formData)
  const [errors, setErrors] = useState({
    Availability: '',
    StartTime: '',
    EndTime: ''
  })
  const [isValid, setIsValid] = useState(false);
  const handleChange = (event: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name as string]: value });
    props.handleChange({...props.formData,[name]:value})
    console.log({...props.formData})
    setIsValid(
      formData.Availability !== '' &&
      formData.StartTime !== '' &&
      formData.EndTime !== ''
    )

  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newErrors = { ...errors };
    let isValidForm = true;
    if (!props.formData.Availability) {
      newErrors.Availability = "Availability is required"
      isValidForm = false;
    }
    if (!props.formData.StartTime) {
      newErrors.StartTime = 'StartTime is required';
      isValidForm = false;
    }
    if (!props.formData.EndTime) {
      newErrors.EndTime = 'EndTime is required';
      isValidForm = false;
    }
    setErrors(newErrors);
    if (isValidForm) {
      console.log("Form Data", formData)
      console.log("Data is filled succesfully")

    }
    else {
      alert('Fill all details')
    }
  }

  // clock

  const options = ['12:00 AM', '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];
  const AvailabiltyOption = [
    {
      value: "everyday",
      label: "Everyday"
    },
    {
      value: "weekDay",
      label: "Weekday"
    },
    {
      value: "Weekend",
      label: "Weekend"
    }
  ]
  


  return (
    <form onSubmit={handleSubmit}>

      <div>
        <br />

        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-select-small">Availability</InputLabel>
          <Select sx={{ width: 500 }}
            labelId="demo-select-small"
            id="demo-select-small"

            label="ApartmentType"
            name='Availability'
            value={props.formData.Availability}
            onChange={handleChange}
            error={!!errors.Availability}


          >
            {AvailabiltyOption.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

          </Select></FormControl>
        <br /><br />

        <Grid>
          <FormLabel component="legend" sx={{ m: 1 }} >Select Time</FormLabel>
          <Grid>
            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-select-small">Select Start Time</InputLabel>
              <Select
                sx={{ width: 500 }}
                labelId="demo-select-small"
                id="demo-select-small"
                label="ApartmentType"
                name="StartTime"
                value={props.formData.StartTime}
                error={!!errors.StartTime}
                onChange={handleChange}
                inputProps={{
                  startAdornment: <InputAdornment position="start"><AccessTimeIcon /></InputAdornment>,
                }}
              >
                {options.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select></FormControl>
            <FormControl sx={{ m: 1 }}>
              <InputLabel id="demo-select-small">Select End Time</InputLabel>
              <Select sx={{ width: 500 }}
                labelId="demo-select-small"
                id="demo-select-small"

                label="EndTime"
                name="EndTime"
                value={props.formData.EndTime}
                error={!!errors.EndTime}
                onChange={handleChange}


              >
                {options.map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}

              </Select></FormControl>
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
              Save
            </Button>
          </FormControl>
        </Grid>
      </div>
    </form>
  );
};

export default Schedule;
