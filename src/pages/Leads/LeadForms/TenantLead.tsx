import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { access } from 'fs';
import { MuiTelInput } from 'mui-tel-input';
import { eventNames } from 'process';
import React, { useState } from 'react';


interface Location{
    name: string;
}

interface Asset{
    name: string;
}
interface TenantLead {
    firstName: string,
    lastName: string,
    emailId: string,
    contactNumber: string,
    isEmailVerified: boolean,
    isPhoneVerified: boolean,
    notes: string,
    isLeadConverted: boolean,
    leadType: string,
    leadSource: string,
    minBudget: string,
    maxBudget: string,
    propertyType: string,
    preferredLocations: Location[],
    assetConfigurations: Asset[],
    occupancyDate: string,
    isDateFlexible: boolean,



}

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
const preferredLocationsArray = [
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

const TenantLead = () => {


    const [tenantLeadForm, setTenantLeadForm] = React.useState<TenantLead>({
        firstName: '',
        lastName: '',
        emailId: '',
        contactNumber: '',
        isEmailVerified: false,
        isPhoneVerified: false,
        notes: '',
        isLeadConverted: false,
        leadType: 'TENANT',
        leadSource: '',
        minBudget: '',
        maxBudget: '',
        propertyType: '',
        preferredLocations: [],
        assetConfigurations: [],
        occupancyDate: '',
        isDateFlexible: false
    });

    const handleChange = (event:any) => {
        const {name, value} = event.target;
        setTenantLeadForm({...tenantLeadForm, [name]: value});
    }

    const [contactNumber, setContactNumber] = React.useState('');

    const handleContactChange = (newContactNumber: string) => {
      setContactNumber(newContactNumber)
      setTenantLeadForm({ ...tenantLeadForm, contactNumber: newContactNumber })
    };

    const [preferredLocations, setPreferredLocations] = useState([]);
    const handlePreferredLocationChange = (event: any) => {
        setPreferredLocations(event.target.value);
        tenantLeadForm.preferredLocations= event.target.value;
    }

    const handleTenantLeadSubmit = async(event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const access_token = localStorage.getItem('access_token');
        if(access_token === null) {
            alert("Please login first");
        }

        console.log(tenantLeadForm);
    }
    return (
        <>
        <div> Tenant Lead </div>
        {/* 
            firstName
            lastName
            emailId
            contactNumber
            isEmailVerified
            isPhoneVerified
            notes
            leadSource
            minBudget
            maxBudget
            propertyType - Gated Society, StandAlone
            preferredLocations
            assetConfig - 1bhk, 2 bhk, 3 bhk
            occupancyDate - 
            isDateFlexible
            tenantType - Family, Bachelors
            isVegetarian
            isHavingPets
            isLookingforaRoom
         */}
        <Box component="form" onSubmit={handleTenantLeadSubmit} sx={{m:1}}>


            <FormControl sx={{m:1}}>
            <TextField 
            label="FirstName" 
            name="firstName" value={tenantLeadForm.firstName}
            sx={{width:300}} onChange={handleChange}

            />
            </FormControl>

            <FormControl sx={{m:1}}>
            <TextField 
            label="LastName" 
            name="lastName" value={tenantLeadForm.lastName}
            sx={{width:300}} onChange={handleChange}

            />
            </FormControl>

            <FormControl sx={{m:1}}>
            <TextField 
            label="Email" 
            name="emailId" value={tenantLeadForm.emailId}
            sx={{width:300}} onChange={handleChange}

            />
            </FormControl>

            <FormControl sx={{m:1}}>
                <MuiTelInput label='Phone' defaultCountry='IN' fullWidth value={tenantLeadForm.contactNumber} name='contactNumber' onChange={handleContactChange} sx={{width: 300}}/>
            </FormControl>

            <br/><br/>

            <FormControl sx={{ m: 1 }}>
            <FormControlLabel
                checked={tenantLeadForm.isEmailVerified}
                control={<Checkbox />}
                label="Email Verified"
                labelPlacement="end"
                name='isEmailVerified' onChange={handleChange}
                />
            </FormControl>
            
            <FormControl sx={{ m: 1 }}>
            <FormControlLabel
                checked={tenantLeadForm.isPhoneVerified}
                control={<Checkbox />}
                label="Phone Number Verified"
                labelPlacement="end"
                name='isPhoneVerified' onChange={handleChange}
                /> 
            </FormControl>

            

            <br/><br/>

            <FormControl sx={{m:1}}>
            <TextField 
            label="Lead Type" 
            name="leadType" value={tenantLeadForm.leadType}
            sx={{width:300}} inputProps={{readOnly: true}}

            />
            </FormControl>

            <FormControl sx={{ m: 1 }}>
                <InputLabel id="facing">Lead Source</InputLabel>
                <Select sx={{ width: 300 }}
                    labelId="leadSource"
                    id="leadSourcel"
                    value={tenantLeadForm.leadSource}
                    label="Lead Source"
                    name='leadSource'
                    onChange={handleChange}
                    
                >
                            <MenuItem value="Facebook">Facebook</MenuItem>
                            <MenuItem value="Instagram">Instagram</MenuItem>
                            <MenuItem value="Website">Website</MenuItem>
                            <MenuItem value="Reference">Reference</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>

                </Select>
            </FormControl>

            <FormControl sx={{m:1}}>
            <TextField 
            label="Min Budget" 
            name="minBudget" value={tenantLeadForm.minBudget}
            sx={{width:300}} onChange={handleChange}

            />
            </FormControl>

            <FormControl sx={{m:1}}>
            <TextField 
            label="Max Budget" 
            name="maxBudget" value={tenantLeadForm.maxBudget}
            sx={{width:300}} onChange={handleChange}

            />
            </FormControl>
            <br/><br/>
            <FormControl sx={{ m: 1 }}>
                <InputLabel id="facing">Property Type</InputLabel>
                <Select sx={{ width: 300 }}
                    labelId="propertyType"
                    id="propertyType"
                    value={tenantLeadForm.propertyType}
                    label="Property Type"
                    name='propertyType'
                    onChange={handleChange}
                    
                >
                            <MenuItem value="gated_apartment">Gated Apartment</MenuItem>
                            <MenuItem value="gated_scoiety">Gated Society</MenuItem>
                            <MenuItem value="villa">Villa</MenuItem>
                            <MenuItem value="standalone_building">Standalone Building</MenuItem>
                            <MenuItem value="plot">Plot</MenuItem>

                </Select>
            </FormControl>

            <FormControl sx={{ m: 1 }}>
                <InputLabel id="demo-multiple-checkbox-label" shrink >Preferred Locations</InputLabel>
                    <Select sx={{minWidth:600}}
                    fullWidth
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={preferredLocations}
                    onChange={handlePreferredLocationChange}
                    input={<OutlinedInput label="Preferred Locations"  notched/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    >
                    {preferredLocationsArray.map((name) => (
                                <MenuItem key={name} value={name}>
                                <Checkbox checked={preferredLocations.findIndex((item:any)=> item === name) > -1} />
                                <ListItemText primary={name} />
                                </MenuItem>
                            ))}   
                    </Select>
            </FormControl>
            <br/><br/>

            <Grid container spacing={12} justifyContent={'normal'}>  
            <Grid item>
            <Button
                        type="submit"
                        sx={{width: 300, height: 50}}
                        variant="contained"
                        
                    >
                        Add Tenant Lead
                    </Button>
            </Grid></Grid>
        </Box>
        </>
    )
}


export default TenantLead;