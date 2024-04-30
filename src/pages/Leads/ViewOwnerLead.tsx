import { FormControl, Button, Select, MenuItem } from "@mui/material";
import { TextField, FormControlLabel, Checkbox, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { access } from "fs";
import { MuiTelInput } from "mui-tel-input";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ViewOwnerLead = () => {
    const {id}=useParams();
    const [ownerLead,setOwnerLead]=useState({
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
        leadType: 'OWNER',
        googleMapLocationUrl: '',
        expectedRent: '',
        expectedDeposit: '',
        furnishing: '',
        availableFrom: '',
        isEmailVerified: false,
        isPhoneVerified: false,
        preferredTenants: '',
        isNonVegAllowed: false,
        isPetAllowed: false,
        isLeadTrashed: false,
        isLeadConverted: false,
        trashedReason:'',
        leadStatus:'',
        baseTimeStamp: {
            created_on: '',
            created_by:'',
            changed_on: '',
            changed_by:''
        },
    })

    const fetchOwnerLead=async()=>{
        const access_token=localStorage.getItem('access_token');
        if(access_token==null){
            alert("token is missing");
        }
        const headers={
            'Content-type':'application/json',
            'Authorization': `Bearer ${access_token}`
        }
        const response= axios.get(``)
    }
  return (
    <><div>View: {id}</div>
        <div>

      <br/>

       <Box component="form" sx={{mt :1}}>
        
       
        <br/>
        <br/>

        <FormControl sx={{m:1}}>
            <TextField sx= {{width:300}}
            label ="Firstname" name="firstName" value={ownerLead.firstName} />
        </FormControl>

        <FormControl sx={{m:1}}>
            <TextField sx= {{width:300}}
            label ="Lastname" name="lastName" value={ownerLead.lastName} />
        </FormControl>
        <FormControl sx={{m:1}}>
          <TextField 
          label="Email Id" 
          name="emailId" value={ownerLead.emailId}
          sx={{width:300}} inputProps={{readOnly: true}}

          />
        </FormControl>
        <FormControl sx={{m:1}}>
          <TextField 
          label="Contact Number" 
          name="contactNumber" value={ownerLead.contactNumber}
          sx={{width:300}} inputProps={{readOnly: true}}

          />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Created Date" name="created_on" value={ownerLead.baseTimeStamp.created_on} />
        </FormControl>

        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Created By" name="created_by" value={ownerLead.baseTimeStamp.created_by} />
        </FormControl>

        <br/>
        <br/>

        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Changed Date" name="changed_on" value={ownerLead.baseTimeStamp.changed_on} />
        </FormControl>

        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Changed By" name="changed_by" value={ownerLead.baseTimeStamp.changed_by} />
        </FormControl>

        <br/>
        <br/>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Property Type" name="propertyType" value={ownerLead.propertyType} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="BHK Type" name="bhkType" value={ownerLead.bhkType} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Locality" name="locality" value={ownerLead.locality} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Apartment Name" name="apartmentName" value={ownerLead.apartmentName} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Google Map Location URL" name="googleMapLocationUrl" value={ownerLead.googleMapLocationUrl} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Lead Source" name="leadSource" value={ownerLead.leadSource} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Lead Type" name="leadType" value={ownerLead.leadType} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Expected Rent" name="expectedRent" value={ownerLead.expectedRent} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Expected Deposit" name="expectedDeposit" value={ownerLead.expectedDeposit} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Furnishing" name="furnishing" value={ownerLead.furnishing} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Available From" name="availableFrom" value={ownerLead.availableFrom} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Lead Status" name="leadStatus" value={ownerLead.leadStatus} />
        </FormControl>
        <FormControl sx={{m:1}}>
           <TextField sx= {{width:300}}
            label ="Trashed Reason" name="trashedReason" value={ownerLead.trashedReason} />
        </FormControl>

        <br />
        <br />

        <FormControl sx={{ m: 1 }}>
            <FormControlLabel
                checked={ownerLead.isEmailVerified}
                control={<Checkbox />}
                label="Email Verified"
                labelPlacement="end"
                name='isEmailVerified' 
                />
        </FormControl>

        <FormControl sx={{ m: 1 }}>
            <FormControlLabel
                checked={ownerLead.isPhoneVerified}
                control={<Checkbox />}
                label="Phone Verified"
                labelPlacement="end"
                name='phoneVerified' 
                />
        </FormControl>

        <FormControl sx={{ m: 1 }}>
            <FormControlLabel
                checked={ownerLead.isNonVegAllowed}
                control={<Checkbox />}
                label="Non veg allowed"
                labelPlacement="end"
                name='isNonVegAllowed' 
                />
        </FormControl>

        <FormControl sx={{ m: 1 }}>
            <FormControlLabel
                checked={ownerLead.isPetAllowed}
                control={<Checkbox />}
                label="Pet Allowed"
                labelPlacement="end"
                name='isPetAllowed' 
                />
        </FormControl>
        <FormControl sx={{ m: 1 }}>
            <FormControlLabel
                checked={ownerLead.isLeadConverted}
                control={<Checkbox />}
                label="Lead Converted"
                labelPlacement="end"
                name='isLeadConverted' 
                />
        </FormControl>
        <FormControl sx={{ m: 1 }}>
            <FormControlLabel
                checked={ownerLead.isLeadTrashed}
                control={<Checkbox />}
                label="Lead Trashed"
                labelPlacement="end"
                name='isLeadTrashed' 
                />
        </FormControl>

        <br/>
        <br/>
        
        

        <FormControl sx={{m:1}}>
                <TextField sx = {{width:1020,m:1}}
                    multiline
                    label = 'Notes'
                    rows = {3}
                    name='notes' value={ownerLead.notes}  placeholder='Additional Notes '
                    variant='outlined'/>
        </FormControl>

    </Box></div>

        </>
  )
}
