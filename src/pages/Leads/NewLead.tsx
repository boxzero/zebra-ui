import { AccountCircle } from '@mui/icons-material';
import { Box ,Chip,FormControl,Input,InputAdornment,InputLabel,MenuItem,OutlinedInput,Select,SelectChangeEvent,Slider,TextField, Theme, Typography, useTheme} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const preferredLocations = [
  'Bellandur',
  'Kadubeesanahalli',
  'Sarjapur',
  'Marathahalli',
  'HSR Layout',
  'Agara Juntion',
  'Harlur Road',
  'Mahadevpura',
  'K R Puram',
  'BTM Layout'
]

const transactionTypes = [
  {
    value: "1",
    label: "Rent"
  },
  // {
  //   value: "2",
  //   label: "Sale"
  // },
  // Use the sale part when you can dunamically modify the budget lower and upper values based on transaction type
  {
    value: "3",
    label: "Lease"
  }
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function valuetext(value: number) {
  return `${value}INR`;
}

const NewLead = (props: Props) => {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [valueBudget, setBudgetValue] = React.useState<number[]>([20000, 45000]);
  const [transactionType,setTransactionType] = useState('');

  const setTransactionTypeHandleChange = (event:SelectChangeEvent) => {
    setTransactionType(event.target.value);
  }

  const handleBudgetChange = (event: Event, newValue: number | number[]) => {
    setBudgetValue(newValue as number[]);
    console.log("Budget::::",valueBudget)

  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  }; 
  
  return (
    <>
    <Box>
    <div>  
    <FormControl sx={{ m: 1 , minWidth: 300}}>
    <InputLabel htmlFor="input-with-icon-adornment">
         Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
        />
    </FormControl>
    
    <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel htmlFor="input-with-icon-adornment">
         Contact Number
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CallIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel htmlFor="input-with-icon-adornment">
         Email
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      
      </div>

      <br/>
      <br/>
      <div>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 600 }}>
        <InputLabel id="demo-multiple-chip-label" variant="standard">Preferred Locations</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          variant="standard"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {preferredLocations.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl>
      <Box sx={{ m:1,width: 250 }}>  
      <Typography id="non-linear-slider" gutterBottom>
        Budget: 
      </Typography>  
      <Slider sx={{ m: 1, minWidth: 300 }}
        id="budget-slider-id"
        min={5000}
        max={100000}
        getAriaLabel={() => 'Temperature range'}
        value={valueBudget}
        onChange={handleBudgetChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        aria-labelledby="non-linear-slider"
      /></Box>
      </FormControl>
      
      </div>
      <br/>
      <div>
      <FormControl  sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">Transaction Type</InputLabel>
          <Select sx={{width: 300}}
              variant='outlined'
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={transactionType}
              onChange={setTransactionTypeHandleChange}
              label="Transaction Type"
            >
              {transactionTypes.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
            </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Possession By" />
      </DemoContainer>
      </LocalizationProvider>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <TextField
            id="outlined-multiline-static"
            label="Notes(Additional)"
            multiline
            rows={4}
          />
      </FormControl>
      </div>
    </Box>
    </>

  )
}

export default NewLead;