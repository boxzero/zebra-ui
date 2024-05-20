import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField,Grid,Button } from "@mui/material";
import { useState, ChangeEvent } from "react";

interface Props  {
    onNextTab: () => void
    formData:{
        city: string,
        locality: string,
        LandMark: string,
    }
    OnPrevTab: () => void
    handleChange:(newData:any)=>void
}


const LocalityDetails = (props: Props) => {

    const cities = [
        {
            value: "1",
            label: "Bangalore"
        },
        {
            value: "2",
            label: "Hyderabad"
        }
    ];
    const [formData, setFormData] = useState({
        city: '',
        locality: '',
        LandMark: '',

    })
    const [errors, setErrors] = useState({
        city: '',
        locality: '',
        LandMark: '',

    })
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name as string]: value })
        props.handleChange({...props.formData,[name as string]:value})
        setIsValid(
            formData.city !== '' &&
            formData.locality !== '' &&
            formData.LandMark !== ''

        )
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let newErrors = { ...errors };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValidForm = true;
        if (!props.formData.city) {
            newErrors.city = 'City is required';
            isValidForm = false;
        }
        if (!props.formData.locality) {
            newErrors.locality = 'Locality is required';
            isValidForm = false;
        }
        if (!props.formData.LandMark) {
            newErrors.LandMark = 'Landmark is required';
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
        <form onSubmit={handleSubmit}>
            <div>
                <FormControl sx={{ m: 1 }}>
                    <InputLabel id="demo-select-small">City</InputLabel>
                    <Select sx={{ width: 300 }}
                        labelId="demo-select-small"
                        id="demo-select-small"
                        name='city'
                        value={props.formData.city}
                        label="ApartmentType"
                        error={!!errors.city}
                        onChange={handleChange}
                    >
                        {cities.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1 }}>
                    <TextField
                        label="Locality"
                        name='locality'
                        value={props.formData.locality}
                        onChange={handleChange}
                        error={!!errors.locality}
                        id="outlined-start-adornment"
                        sx={{ width: 300 }}

                    />
                </FormControl>
            </div>
            <br />
            <br />
            <FormControl sx={{ m: 1 }}>
                <TextField
                    label="Landmark/Street"
                    name="LandMark"
                    value={props.formData.LandMark}
                    onChange={handleChange}
                    error={!!errors.LandMark}
                    id="outlined-start-adornment"
                    sx={{ width: 300 }}

                />
            </FormControl>
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


        </form>
    );
}

export default LocalityDetails;