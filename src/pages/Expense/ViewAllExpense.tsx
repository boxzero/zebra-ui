import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from '@mui/x-data-grid';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom";
type Props = {}
export const ViewAllExpense = () => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const columns: GridColDef[] = [
        //{ field: 'created_date', headerName: 'CREATED DATE', width: 150, editable: true },
        { field: 'expenseMadeBy', headerName: 'EXPENSE MADE BY', width: 200, editable: true },
        { field: 'expenseType', headerName: 'EXPENSE TYPE', width: 200, editable: true },
        { field: 'amount', headerName: "AMOUNT", width: 100, editable: true },
        { field: 'date', headerName: "DATE", width: 200, editable: true },
        { field: 'notes', headerName: "NOTES",  width: 200 },
        
        {
            field: 'id',
            headerName: 'ACTIONS',
            width: 300,
            renderCell: (params) => (

                <>
                    <Button ><VisibilityIcon /></Button>
                    <Button><EditIcon /></Button>
                    <Button ><DeleteIcon /></Button>
                    <Button >Approve</Button>
                </>

            ),
        }
    ];
    const fetchData = async()=>
    {
        try
        {
            const access_token= localStorage.getItem('access_token');
            if(access_token===null){
                alert("Token is missing")
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`,
              };
            console.log(access_token)
            const response= await axios.get('http://localhost:9091/expense/all',{headers});
            setRows(response.data)
            
            console.log(response.data)
        }
        catch(err:any){
            if (err.response && err.response.status === 403) {
                alert('Forbidden: Access is denied due to insufficient permissions.');
              } else {
                alert('An error occurred while fetching the data.');
              }
            }
        }
    
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <Box sx={{ height: 700, width: '100%' }}>
            <Typography variant='h6' component='h6'
                sx={{ textAlign: 'left', mt: 2, mb: 2 }}>View All Expenses</Typography>
            <DataGrid
                columns={columns} rows={rows} getRowId={(row) => row.expense_id}


                pagination={true} />
        </Box>

    )
}