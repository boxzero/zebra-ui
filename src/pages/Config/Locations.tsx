import { Box, Button, Grid, IconButton, Modal, TextField, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';

type Props = {}

const Locations = (props: Props) => {

  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState('');
  const [locationName, setLocationName] = useState('');
  const [pincode, setPincode] = useState('');

  const navigate = useNavigate ();

  function handleView(id: GridRowId): void {
    navigate("/users/view/"+id);
  }
  
  function handleEdit(id: GridRowId): void {
    navigate("/users/edit/"+id);
    
  }
  
  
  function handleDelete(id: GridRowId): void {
    fetchData();
  }

    const fetchData = async () => {
      try{const access_token = localStorage.getItem('access_token');
      if(access_token === null) {alert("Token is missing"); return;}
  
      const headers = {
        'Content-Type':'application/json',
        'Authorization': `Bearer ${access_token}`
      }
  
      const response = await axios.get('/configure/view-all-locations',{headers});
      setRows(response.data)}
      catch(err:any) {
        if (err.response && err.response.status === 403) {
            alert('Forbidden: Access is denied due to insufficient permissions.');
          } else {
            alert('An error occurred while fetching the data.');
          }
      }
    }


const columns: GridColDef[] = [

        {field: 'locationName', headerName: 'LOCATION NAME',width:200},
        {field: 'city', headerName: 'CITY',width:200},
        {field: 'pinCode',headerName: 'PIN CODE', width:200},
        {
            field: 'locationId',
            headerName: 'Actions',
            width: 250,
            renderCell: (params) => (
              
                <><Button onClick={() => handleView(params.id)}><VisibilityIcon /></Button>
                <Button onClick={() => handleEdit(params.id)}><EditIcon /></Button>
                <Button onClick={() => handleDelete(params.id)}><DeleteIcon /></Button></>
              
            ),
          }
];

const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    const access_token = localStorage.getItem('access_token');
    if (access_token === null) {
      alert("Token is missing");
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`
    };

    const data = {
      city,
      locationName,
      pincode
    };

    try {
      const response = await axios.post('/configure/add-location', data, { headers });
      //setRows([...rows, response.data]);
      alert("Location Saved Successfully")
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchData();
  },[handleSave])
  return (
    <>
    <Box sx={{ height: '50', width: '100%', display: 'flex', justifyContent: 'flex-end'}} >
        <Button type='submit' sx={{width:200, height:50}} variant='contained' onClick={handleOpen}>Add Location</Button>
    </Box>
    <Box sx={{height: '100%-50',width:'100%'}}>
    <Typography variant='h6' component='h6'
    sx={{textAlign:'left',mt:2,mb:2}}>Manage Locations</Typography>
    <DataGrid columns={columns} rows={rows} getRowId={(row) => row.locationId}/>
    </Box>  

    <Modal open={open} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='h6' component='h6'>
              Add Location
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography variant='h6' component='h6' sx={{ textAlign: 'center' }}>
            Add Location
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label='City' value={city} onChange={(e) => setCity(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Location Name' value={locationName} onChange={(e) => setLocationName(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Pincode' value={pincode} onChange={(e) => setPincode(e.target.value)} fullWidth />
            </Grid>
          </Grid>
          <Button type='submit' sx={{ width: 200, height: 50, mt: 2 }} variant='contained' onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Modal>
  </>
  )
}

export default Locations;