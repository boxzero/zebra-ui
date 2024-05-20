import { Box, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react'

type Props = {}
/**
 * 
 * @param props 
 * expenseType;
 * expenseMadeBy;
 * amount;
 * date;
 * notes;
 * @returns 
 */

const expenseTypes = [
  {
    value: "food",
    label: "Food"
  },
  {
    value: "payout",
    label: "Internship/Salary"
  },
  {
    value: "portal_subscription",
    label: "Portal Subscription"
  },
  {
    value: "tech_payment",
    label: "Tech Payment"
  },
  {
    value: "travel",
    label: "Travel"
  },
  {
    value: "other",
    label: "Other"
  }
];

const AddExpense = (props: Props) => {

  const [expenseData,setExpenseData] = useState({
    expenseType: '',  
    expenseMadeBy: '',
    amount: '',
    date: '',
    notes: ''
  });

  const [user,setUser] = useState([
    {username: '',
    name: ''}
  ]);
  useEffect(()=> {
    fetchUserList();
  },[]);

  const fetchUserList = async() => {
    const access_token = localStorage.getItem('access_token');
    if(access_token === null) {alert("Token is missing "); return;}

    const headers ={
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`
    };

    const response = await axios.get('http://localhost:9091/users/v1/userlist',{headers});
    setUser(response.data)
  }
  const handleChange = (event: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setExpenseData({...expenseData, [name]: value});
  }
  return (
    <>
    <div>AddExpense</div>
    <Box component="form" noValidate sx={{ mt: 1}}>
    <FormControl sx={{ m: 1 }}>
          <InputLabel id="expense-type-label">Expense Type</InputLabel>
          <Select sx={{ width: 300 }}
            labelId="expense-type-label"
            id="expense-type"
            value={expenseData.expenseType}
            label="ExpenseType"
            name='expenseType'
            onChange={handleChange}
            // error={!!errors.apartmentType}
          >
            {expenseTypes.map(({ value, label }, index) => <MenuItem value={value} >{label}</MenuItem>)}

          </Select>
    </FormControl>

    <FormControl sx={{ m: 1 }}>
          <InputLabel id="expense-madeby-label">Expense Made By</InputLabel>
          <Select sx={{ width: 300 }}
            labelId="expense-madeby-label"
            id="expense-madeby"
            value={expenseData.expenseMadeBy}
            label="expenseMadeBy"
            name='expenseMadeBy'
            onChange={handleChange}
            // error={!!errors.apartmentType}
          >
            {user.map((u) => (
                        <MenuItem value={u.username} >
                        {u.name}
                        </MenuItem>
                    ))}
          </Select>
    </FormControl>
    </Box>
    </>
  )
}

export default AddExpense;