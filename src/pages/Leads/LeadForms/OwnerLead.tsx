import { useState, ChangeEvent } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, InputAdornment, Autocomplete, TextField, FormControlLabel, Checkbox, Stack, Chip, Button, ButtonGroup, Typography, Grid, FormGroup, FormLabel, FormHelperText, Box } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const OwnerLead = () => {
      const leadSource = [
        {
          value: "Facebook",
          label: "Facebook"
        },
        {
          value: "Instagram",
          label: "Instagram"
        },
        {
            value: "Reference",
            label: "Reference"
          },
          {
            value: "Website",
            label: "Website"
          },
          {
            value: "Other",
            label: "Other"
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
      const locality = [
        'Bellandur',
        'Kadubeesanahalli',
        'Sarjapur',
        'HSR Layout',
        'Marathahalli',
        'Brookefield',
        'WhiteField',
        'Mahadevpura',
        'Agara Lake',
        'Harlur Road',
        'Carmeralum',
        'Iblur Lake'
    ];
    
      
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        emailId: '',
        contactNumber: '',
        leadSource: '',
        notes: '',
        propertyType: '',
        bhkType: '',
        apartmentName: '',
        locality: '',
        leadType:'OWNER',
        googleMapLocationUrl: '',
        expectedRent: '',
        expectedDeposit: '',
        furnishing: '',
        availableFrom:'',
        isEmailVerified: false,
        isPhoneVerified: false,
        
        any: false,
        family: false,
        bachelorFemale: false,
        bachelorMale: false,
        company: false,
        
        isNonVegAllowed: false,
        isPetAllowed: false,

    })
    const handleCheckbox = (checked: boolean, name: string) => {
        let newData={...data};
        if (name === 'any') {
            newData = {
                ...newData,
                any: checked,
                family: checked,
                bachelorFemale: checked,
                bachelorMale: checked,
                company: checked
            };
        } else {
            newData = { ...newData, [name]: checked };
        }
    
        setData(newData);
    };
    const [contactNumber, setContactNumber] = useState('');
    const handleDateChange = (date: Date | null) => {
        if (date) {
          setData({ ...data, availableFrom: date.toISOString() }); 
          setIsValid(data.availableFrom !== ''); 
          console.log(date)
        }
      };
    const handleContactChange = (newContactNumber: string) => {
    
        setContactNumber(newContactNumber)
        setData({ ...data, contactNumber: newContactNumber })
      };
    const [isValid, setIsValid] = useState(false);
    const [errors,setErrors]=useState({
        firstName: '',
        lastName: '',
        emailId: '',
        contactNumber: '',
    })
    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        let newErrors={...errors}
        let valid=true;
        if(!data.firstName){
            valid=false;
            newErrors.firstName="First Name is required"
        }
        if(!data.lastName){
            valid=false;
            newErrors.lastName="Last Name is required"
        }
        if(!data.emailId){
            valid=false;
            newErrors.emailId="E-mail is required"
        }
        if(!data.contactNumber){
            valid=false;
            newErrors.contactNumber="Contact Number is required"
        }
        setErrors(newErrors)
        if(valid){
            console.log({data});
        }
        else{
            alert("Fill all the details")
        }
    }
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setData({ ...data, [name as string]: value });
        setIsValid(
            data.firstName !== '' &&
            data.lastName !== '' &&
            data.emailId !== '' &&
            data.contactNumber !== ''
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <Grid container my={4} alignItems="center" sx={{ m: 1 }}>
                    <Grid item xs={3.5} sx={{ m: 1, paddingRight: '150px' }}>
                        <TextField
                            label="First Name"
                            name='firstName'
                            value={data.firstName}
                            onChange={handleChange}
                            error={!!errors.firstName}
                            required
                            id="outlined-start-adornment"
                            sx={{ width: 300 }}
                        />
                    </Grid>
                    <Grid item xs={3.5} sx={{ m: 1, paddingRight: '150px' }}>
                        <TextField
                            label="Last Name"
                            name='lastName'
                            value={data.lastName}
                            onChange={handleChange}
                            error={!!errors.lastName}
                            required
                            id="outlined-start-adornment"
                            sx={{ width: 300 }}
                        />
                    </Grid>
                    <Grid item xs={3.5} sx={{ m: 1, paddingRight: '150px' }}>
                        <TextField
                            label="E-mail"
                            name='emailId'
                            value={data.emailId}
                            onChange={handleChange}
                            error={!!errors.emailId}
                            required
                            id="outlined-start-adornment"
                            sx={{ width: 300 }}
                        />
                    </Grid>
                    <Grid item xs={3.5} sx={{ paddingRight: '150px' }}>

                        <FormControl sx={{ m: 1 }}>
                            <MuiTelInput label='Contact Number' required defaultCountry='IN' fullWidth name='contactNumber'onChange={handleContactChange}
                            value={data.contactNumber}

                            error={!!errors.contactNumber} sx={{ width: 300 }} />
                        </FormControl>
                    </Grid>

                </Grid>
                <Grid sx={{ m: 1 }}>
                    <FormControl sx={{ m: 1 }}>
                        <FormControlLabel

                            control={<Checkbox checked={data.isEmailVerified} onChange={(event) => handleCheckbox(event.target.checked, 'isEmailVerified')} />}
                            label="Email Verified"
                            labelPlacement="end"
                            name='isEmailVerified'
                            
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1 }}>
                        <FormControlLabel

                            control={<Checkbox checked={data.isPhoneVerified} onChange={(event) => handleCheckbox(event.target.checked, 'isPhoneVerified')} />}
                            label="Phone  Verified"
                            labelPlacement="end"
                            name='isPhoneVerified'
                        />
                    </FormControl>
                </Grid>
                <Grid container my={4} alignItems="center" sx={{ m: 1 }}>
                    <FormControl sx={{ m: 1 }}>
                        <InputLabel id="leadsource-label">Lead Source</InputLabel>
                        <Select sx={{ width: 300 }}
                            id="lead-source"
                            value={data.leadSource}

                            label='LeadSource'
                            name='leadSource'
                            onChange={handleChange}
                        >
                            {leadSource.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Grid sx={{ m: 1 }}>

                        <TextField
                            label="Lead Type"
                            name='leadType'
                            value={data.leadType}
                            required
                            id="outlined-start-adornment"
                            sx={{ width: 300 }}
                        />
                    </Grid>
                </Grid>
                
                <Grid sx={{ m: 1 }}>
                    <FormControl sx={{ m: 1 }}>
                        <InputLabel id="propertyType-label">Property Type</InputLabel>
                        <Select sx={{ width: 300 }}
                            id="property-type"
                            name='propertyType'
                            value={data.propertyType}
                            onChange={handleChange}

                            label='PropertyType'
                        >
                            <MenuItem value="gated_apartment">Gated Apartment</MenuItem>
                            <MenuItem value="gated_scoiety">Gated Society</MenuItem>
                            <MenuItem value="villa">Villa</MenuItem>
                            <MenuItem value="standalone_building">Standalone Building</MenuItem>
                            <MenuItem value="plot">Plot</MenuItem>

                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1 }}>
                        <InputLabel id="BHKTYPE-label">BHK Type</InputLabel>
                        <Select sx={{ width: 300 }}
                            id="bhktype-type"
                            name='bhkType'
                            value={data.bhkType}
                            onChange={handleChange}
                            label='BHKType'
                        >
                            {bhkTypes.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Apartment Name"
                        name='apartmentName'
                       
                        value={data.apartmentName}
                         onChange={handleChange}
                        id="outlined-start-adornment"
                        sx={{ width: 300, m: 1 }}
                    />
                </Grid>
                <Grid sx={{ m: 1 }}>
                    
                    
                    <FormControl sx={{ m: 1 }}>
                        <InputLabel id="BHKTYPE-label">Locality</InputLabel>
                        <Select sx={{ width: 300 }}
                            id="bhktype-type"
                            name='bhkType'
                            value={data.locality}
                            onChange={handleChange}
                            label='BHKType'
                        >
                            {locality.map((value, index) => <MenuItem >{value}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Google Map Location URL"
                        name='googleMapLocationUrl'
                        value={data.googleMapLocationUrl}
                        onChange={handleChange}
                        id="outlined-start-adornment"
                        sx={{ width: 300, m: 1 }}
                    />
                </Grid>
                <Grid sx={{ m: 1 }}>
                    <FormControl component="fieldset" sx={{ m: 1 }}  >
                        <FormLabel component="legend" required>Preferred Tenants</FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel sx={{ paddingRight: '150px' }}
                                value="top"
                                control={<Checkbox checked={data.any} onChange={(event) => handleCheckbox(event.target.checked, 'any')}/>}
                                label="Any"
                                name="any"
                                labelPlacement="end"
                            />
                            <FormControlLabel sx={{ paddingRight: '150px' }}
                                value="start"
                                control={<Checkbox checked={data.family} onChange={(event) => handleCheckbox(event.target.checked, 'family')} />}
                                label="Family"
                                name='family'
                                labelPlacement="end"
                            />
                            <FormControlLabel sx={{ paddingRight: '150px' }}
                                value="bottom"
                                control={<Checkbox checked={data.bachelorFemale} onChange={(event) => handleCheckbox(event.target.checked, 'bachelorFemale')} />}
                                label="Bachelor Female"
                                name='bachelorFemale'
                                labelPlacement="end"
                            />
                            <FormControlLabel sx={{ paddingRight: '150px' }}
                                value="end"
                                control={<Checkbox checked={data.bachelorMale} onChange={(event) => handleCheckbox(event.target.checked, 'bachelorMale')} />}
                                label="Bachelor Male"
                                name='bachelorMale'
                                labelPlacement="end"
                            />
                            <FormControlLabel sx={{ paddingRight: '150px' }}
                                value="end"
                                control={<Checkbox checked={data.company} onChange={(event) => handleCheckbox(event.target.checked, 'company')} />}
                                label="Comapny"
                                name='company'
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid sx={{ m: 1 }} >
                    <FormControl component="fieldset" sx={{ m: 1 }}  >
                        <FormGroup row>
                            <FormControlLabel sx={{ paddingRight: '150px' }}
                                value="end"
                                control={<Checkbox checked={data.isNonVegAllowed} onChange={(event) => handleCheckbox(event.target.checked, 'isNonVegAllowed')} />}
                                name='isNonVegAllowed'
                                label="Is Non-Veg Allowed"
                                labelPlacement="end"
                            />
                            <FormControlLabel sx={{ paddingRight: '150px' }}
                                value="end"
                                control={<Checkbox checked={data.isPetAllowed} onChange={(event) => handleCheckbox(event.target.checked, 'isPetAllowed')}/>}
                                label="Is Pet Allowed"
                                name='isPetAllowed'
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid sx={{ m: 1 }}>
                    <TextField
                        label="Expected Rent"
                        name='expectedRent'
                        value={data.expectedRent}
                        onChange={handleChange}
                        id="outlined-start-adornment"
                        sx={{ width: 300, m: 1 }}


                        InputProps={{
                            startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Expected Deposit"
                        name='expectedDeposit'
                        value={data.expectedDeposit}
                        onChange={handleChange}

                        id="outlined-start-adornment"
                        sx={{ width: 300, m: 1 }}


                        InputProps={{
                            startAdornment: <InputAdornment position="start"><CurrencyRupeeIcon /></InputAdornment>,
                        }}
                    />
                    <FormControl sx={{ m: 1 }}>
                        <InputLabel id="Furnishing-label">Furnishing</InputLabel>
                        <Select sx={{ width: 300 }}
                            id="Furnishing"
                            name='furnishing'

                            value={data.furnishing}
                            onChange={handleChange}
                            label='Furnishing'
                        >
                            {furnitures.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <Box sx={{ m: 1 }}  >
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                label="Available From "
                                name='availableFrom'
                                value={data.availableFrom ? new Date(data.availableFrom) : null}
                                onChange={handleDateChange}

                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid sx={{ m: 1 }}>
                    <TextField sx={{ width: 1020, m: 1 }}
                        multiline
                        label='Notes'
                        name='notes'
                        value={data.notes}
                        onChange={handleChange}
                        rows={3}
                        variant='outlined' />
                </Grid>
                <Grid container justifyContent="end">

                    <FormControl sx={{ m: 1 }}>
                        <Button sx={{ width: 160, height: 50 }} variant="contained" type="submit">
                            Add Owner Lead
                        </Button>
                    </FormControl>
                </Grid>
            </form>
        </div >
    )
}
export default OwnerLead;