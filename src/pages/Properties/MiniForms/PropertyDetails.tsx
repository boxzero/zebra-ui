import { Box, Button, FormControl, FormHelperText, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { ChangeEvent, useState, useEffect } from "react";



interface Props  {
  onNextTab:()=>void;
  formData: {
    apartmentType: string;
    bhkType: string;
    floor: string;
    totalfloor: string;
    propertyAge: string;
    facing: string;
    builtupArea: string;
  };
  handleChange: (newData:any) => void;
}



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

  for (var i = 0; i <= 100; i++) {
    floors.push({ value: i, label: i });
  }
  
  const [isValid, setisValid] = useState(false);
  const [formData, setFormData] = useState({
    apartmentType: '',
    bhkType: '',
    floor: '',
    totalfloor: '',
    propertyAge: '',
    facing: '',
    builtupArea: '',
   

  })
  const [errors, setErrors] = useState({
    apartmentType: '',
    bhkType: '',
    floor: '',
    totalfloor: '',
    propertyAge: '',
    facing: '',
    

  })
  const handleChange = (event: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    props.handleChange({ ...props.formData, [name]: value as string });
    setisValid(
      formData.apartmentType!==''&&
      formData.bhkType!==''&&
      formData.floor!==''&&
      formData.totalfloor!==''&&
      formData.propertyAge!==''&&
      formData.facing!==''
    );
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newErrors = { ...errors };
    let isValidForm = true;
    if (!props.formData.apartmentType) {
      newErrors.apartmentType = 'Apartment type is required';
      isValidForm = false;
    }
    if (!props.formData.bhkType) {
      newErrors.bhkType = 'BHK type is required';
      isValidForm = false;
    }
    if (!props.formData.floor) {
      newErrors.floor = 'No.of floors required';
      isValidForm = false;
    }
    if (!props.formData.totalfloor) {
      newErrors.totalfloor = 'No.of total floors required';
      isValidForm = false;
    }
    if (!props.formData.propertyAge) {
      newErrors.propertyAge = 'propertyAge is required required';
      isValidForm = false;
    }
    if (!props.formData.facing) {
      newErrors.facing = 'facing is required';
      isValidForm = false;
    }

   
    

    setErrors(newErrors);
    if(isValidForm){ 
      console.log("Form Data ", formData)
      props.onNextTab()
  
  }
    else{
      alert("Fill all the details")
  }
  }

  
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="apartment-type-label">Apartment Type</InputLabel>
          <Select sx={{ width: 300 }}
            labelId="apartment-type-label"
            id="apartment-type"
            value={props.formData.apartmentType}
            label="ApartmentType"
            name='apartmentType'
            onChange={handleChange}
            error={!!errors.apartmentType}
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
          <Select sx={{ width: 300 }}
            labelId="bhk-Type"
            id="bhk-Type"
            value={props.formData.bhkType}
            label="BHKType"
            name='bhkType'
            onChange={handleChange}
            error={!!errors.bhkType}
          >
            {bhkTypes.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel id="bhk-Type">Floor</InputLabel>
          <Select sx={{ width: 300 }}
            labelId="floor"
            id="floor"
            value={props.formData.floor}
            label="floor"
            name='floor'
            onChange={handleChange}
            error={!!errors.floor}
          >
            {floors.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel id="total-floors">Total Floors</InputLabel>
          <Select sx={{ width: 300 }}
            labelId="total-floors"
            id="total-floors"
            value={props.formData.totalfloor}
            label="totalfloor"
            name='totalfloor'
            onChange={handleChange}
            error={!!errors.totalfloor}
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
          <Select sx={{ width: 300 }}
            labelId="property-age"
            id="property-age"
            value={props.formData.propertyAge}
            label="propertyAge"
            name='propertyAge'
            onChange={handleChange}
            error={!!errors.propertyAge}
          >
            {propertyAges.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel id="facing">Facing</InputLabel>
          <Select sx={{ width: 300 }}
            labelId="facing"
            id="facing"
            value={props.formData.facing}
            label="facing"
            name='facing'
            onChange={handleChange}
            error={!!errors.facing}
          >
            {facings.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

          </Select>
        </FormControl>
      </div>

      <br />
      <br />
      <br />

      <div>
        <FormControl sx={{ m: 1 }} >

          <TextField
            label="Built Up Area"
            id="built-up-area"
            sx={{ width: 300 }}
            value={props.formData.builtupArea}
            name="builtupArea"
            onChange={handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">Sq.Ft.</InputAdornment>,
            }}
          />

        </FormControl>

        <FormControl sx={{ m: 1 }} >
          <Button sx={{ width: 160, height: 50 }} variant="contained" type="submit" >
            Next
          </Button></FormControl>
      </div>




    </form>
  )
}

export default PropertyDetails;