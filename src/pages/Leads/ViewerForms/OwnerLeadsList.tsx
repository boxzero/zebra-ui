import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import sizeConfigs from "../../../configs/sizeConfigs";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import StyledDataGrid from "../../../components/common/StyledDataGrid";

interface MailToLinkProps {
    value: string;
  }


const OwnerLeadsList = () => {

    const [rows, setRows] = useState([]);
    function handleView(id: GridRowId): void {
    
       alert("View")
      }
      
      
      function handleEdit(id: GridRowId): void {
       alert("Edit")
        
      }
      
      
      function handleDelete(id: GridRowId): void {
        alert("Delete")
      }



      function MailToLink({value}: MailToLinkProps) {
        return <a href={`mailto:${value}`}>{value}</a>;
      }

    const columns: GridColDef[] = [

        /**
         *         "ownerID": "cf78c67d-a21c-40f1-841b-a0de81cfdd0f",
        "firstName": "Santosh",
        "lastName": "Biswas",
        "contactNumber": "+91 80132 24567",
        "emailId": "santosh@houseclay.com",
        "leadStatus": "NEW",
        "locality": "",
        "bhkType": "",
        "apartmentName": "",
        "expectedRent": "",
        "googleMapLocationURL": ""
         */
        {field: 'firstName',headerName: 'FIRSTNAME',editable:false},
        {field: 'lastName',headerName: 'LASTNAME',editable:false},
        {field: 'contactNumber', headerName: 'CONTACT',editable:true,width:150},
        {field: 'emailId',headerName: 'EMAIL',editable:true,minWidth:200,
        renderCell: (params) => <MailToLink value={params.value} />
        },
        {field: 'leadStatus',headerName: 'LEAD STATUS',editable:false,
        cellClassName: (params) => {
            if (params.value === 'NEW') {
              return 'lead-status-new';
            } else {
              return 'lead-status-other';
            }
          }
        },
        {field: 'locality', headerName: 'LOCALITY', editable:false,width:150},
        {field: 'bhkType', headerName: 'BHK TYPE', editable:false},
        {field: 'apartmentName', headerName: 'APARTMENT NAME',editable:true,minWidth:150},
        {field: 'expectedRent', headerName: 'EXPECTED RENT',editable:true},
        {field: 'googleMapLocationURL', headerName: 'GOOGLE MAP URL', editable: true,width:200},
        {
            field: 'id',
            headerName: 'Actions',
            renderCell: (params) => {
                return <><Button onClick={() => handleView(params.id)}><VisibilityIcon /></Button>
                    <Button onClick={() => handleEdit(params.id)}><EditIcon /></Button>
                    <Button onClick={() => handleDelete(params.id)}><DeleteIcon /></Button></>;
            },
            editable: false,
            width:300
        }

    ];


    const fetchData = async () => {

        try{  const access_token = localStorage.getItem('access_token');
          //const access_token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmtpdC5iaXN3YXM5QGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfTUFOQUdFUiIsIlJPTEVfU1VQRVJfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDkxL3plYnJhL2xvZ2luIiwiZXhwIjoxNzExNjc3MjY1fQ.JINqH5KUnhEpmkWPGvLtT8akWJuXHRkPdFREdnIJZp4";
          if(access_token === null) {alert("Token is missing"); return;}
          // Create headers object with access_token
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`,
          };
          const response = await axios.get('http://localhost:9091/owner-leads/v1/fetchAll',{headers});
          console.log(response.data)
          setRows(response.data);
        }catch(err:any) {
          if (err.response && err.response.status === 403) {
            alert('Forbidden: Access is denied due to insufficient permissions.');
          } else {
            alert('An error occurred while fetching the data.');
          }
        }
    }
    
    useEffect(() => {
      fetchData();
    },[])
    return (
        <>
    <Box sx={{height:550,width:`calc(100%)`}}>
            <Typography variant='h6' component='h6'
            sx={{textAlign:'left',mt:2,mb:2}}>Owner Leads</Typography>
        <StyledDataGrid
        columns={columns} rows={rows}
        getRowId={(row) => row.ownerID} 
            
        pagination={true}/>
    </Box>
        </>
    );
}

export default OwnerLeadsList;