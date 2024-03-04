import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";

type Props = {}


const LocalityDetails = (props: Props) => {

    const cities = [
        {
            value: "1",
            label: "Bangalore"
        },
        {
            value:"2",
            label:"Hyderabad"
        }
    ];

    const [city,setCity] = useState('');

    const cityChangeHandler = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    }
    return (
           <>
           <div>
            <FormControl sx = {{m:1}}>
            <InputLabel id="demo-select-small">City</InputLabel>
                <Select sx={{width: 300}}
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={city}
                    label="ApartmentType"
                    onChange={cityChangeHandler}
                >
                    {cities.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                    
                </Select>
            </FormControl>

            <FormControl sx = {{m:1}}>
                <TextField
                        label="Locality"
                        id="outlined-start-adornment"
                        sx={{width: 300}}
                        
                        /> 
            </FormControl>                
           </div>
           <br />
           <br />
           <FormControl sx = {{m:1}}>
                <TextField
                        label="Landmark/Street"
                        id="outlined-start-adornment"
                        sx={{width: 300}}
                        
                        /> 
            </FormControl>

            <br /> 
            <br /> 
            <br /> 
            <br /> 
            <br />

            <br /> 
            <br /> 
            <br /> 
            <br /> 
            <br />

            <br /> 
            <br /> 
            <br /> 
            <br /> 


           </>
    );
}

export default LocalityDetails;