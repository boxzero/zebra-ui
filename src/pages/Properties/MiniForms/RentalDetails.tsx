import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Autocomplete, TextField, FormControlLabel, Checkbox } from '@mui/material';
import React, { ReactNode, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box } from '@mui/material'

// import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



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

  const [monthlyMaintenence, setmonthlyMaintenence] = useState('');
  const [expectedMaintenance, setExpectedMaintenance] = useState<string>('0');
  const [isexpectedMaintenanceHidden, setisexpectedMaintenanceHidden] = useState(false);

  const [value, setValue] = useState(null);
  const [furniture, setFurniture] = useState('');
  const [parking, setParking] = useState('');




  const monthlyMaintenenceChangeHandler = (event: SelectChangeEvent) => {
    const option = event.target.value;
    setmonthlyMaintenence(option);
    if (option === '1') {
      setExpectedMaintenance('0');
      setisexpectedMaintenanceHidden(false);
    } else {
      setExpectedMaintenance('')
      setisexpectedMaintenanceHidden(true);
    }
  }
  const handleMaintenanceAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) || value === '') {
      setExpectedMaintenance(value);
    }
  };

  const furnitureChangeHandler = (event: SelectChangeEvent) => {
    setFurniture(event.target.value);
  }

  const parkingChangeHandler = (event: SelectChangeEvent) => {
    setParking(event.target.value);
  }


  const [propertyAvailableType, setpropertyAvailableType] = useState('');
  const propertyAvailableTypeHandleChange = (event: SelectChangeEvent) => {
    setpropertyAvailableType(event.target.value);
  }




  return (
    <>
      <div>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="demo-select-small">Property For</InputLabel>
          <Select sx={{ width: 500 }}
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

      <div>
        <FormControl sx={{ m: 1 }} >

          <TextField
            label="Expected Rent"
            id="outlined-start-adornment"
            sx={{ width: 500 }}

            InputProps={{
              startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
              endAdornment: <InputAdornment position="end">/Month</InputAdornment>
            }}

          />

        </FormControl>

        <FormControl sx={{ m: 1 }} >

          <TextField
            label="Expected Deposit"
            id="outlined-start-adornment"
            sx={{ width: 500 }}

            InputProps={{
              startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
            }}
          />

        </FormControl>

        <br />
        <br />
        <FormControl sx={{ m: 1 }}>
          <FormControlLabel control={<Checkbox defaultChecked={false} />} label="Rent Negotiable" />
        </FormControl>
        <br />
        <br />

        <div>
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-select-small">Monthly Maintenance</InputLabel>
            <Select sx={{ width: 400 }}
              labelId="demo-select-small"
              id="demo-select-small"
              value={monthlyMaintenence}
              label="ApartmentType"
              onChange={monthlyMaintenenceChangeHandler}
            >
              {maintenance.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

            </Select>
          </FormControl>
          {isexpectedMaintenanceHidden && (<FormControl sx={{ m: 1 }}>

            <TextField
              label="Expected Maintenance"
              id="outlined-start-adornment"
              sx={{ width: 500 }}

              value={expectedMaintenance}
              
              onChange={handleMaintenanceAmountChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
                endAdornment: <InputAdornment position="end">/Month</InputAdornment>
              }}
            />



          </FormControl>)}



        </div>


        <br />



        <Box sx={{ m: 1 }}  >
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DatePicker
              label="Available From "
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </Box>
        <br />


        <FormControl component="fieldset" sx={{ m: 1 }}  >
          <FormLabel component="legend" required>Preferred Tenants</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel sx={{ paddingRight: '150px' }}
              value="top"
              control={<Checkbox />}
              label="Anyone"
              labelPlacement="end"
            />
            <FormControlLabel sx={{ paddingRight: '150px' }}
              value="start"
              control={<Checkbox />}
              label="Family"
              labelPlacement="end"
            />
            <FormControlLabel sx={{ paddingRight: '150px' }}
              value="bottom"
              control={<Checkbox />}
              label="Bachelor Female"
              labelPlacement="end"
            />
            <FormControlLabel sx={{ paddingRight: '150px' }}
              value="end"
              control={<Checkbox />}
              label="Bachelor Male"
              labelPlacement="end"
            />

            <FormControlLabel sx={{ paddingRight: '150px' }}
              value="end"
              control={<Checkbox />}
              label="Comapny"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
        <br />

        <div>
          <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-select-small">Furnishing</InputLabel>
            <Select sx={{ width: 500 }}

              labelId="demo-select-small"
              id="demo-select-small"
              value={furniture}
              label="Furniture"
              onChange={furnitureChangeHandler}
            >
              {furnitures.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
            </Select>
          </FormControl>


          <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-select-small">Parking</InputLabel>
            <Select sx={{ width: 500 }}

              labelId="demo-select-small"
              id="demo-select-small"
              value={parking}
              label="ApartmentType"
              onChange={parkingChangeHandler}

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
            rows={3}
            variant='outlined' />
        </div>

        <br />



      </div>
    </>
  )
}

export default RentalDetails;