import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import React, { useEffect, useState } from "react";

type Props = {};
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
    label: "Food",
  },
  {
    value: "payout",
    label: "Internship/Salary",
  },
  {
    value: "portal_subscription",
    label: "Portal Subscription",
  },
  {
    value: "tech_payment",
    label: "Tech Payment",
  },
  {
    value: "travel",
    label: "Travel",
  },
  {
    value: "other",
    label: "Other",
  },
];

const AddExpense = (props: Props) => {
  const [expenseData, setExpenseData] = useState({
    expenseType: "",
    expenseMadeBy: "",
    amount: "",
    date: "",
    notes: "",
  });

  const [user, setUser] = useState([{ username: "", name: "" }]);
  useEffect(() => {
    setFirstLoad(true);
    fetchUserList();
  }, []);

  const [firstLoad, setFirstLoad] = useState(false);

  const fetchUserList = async () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token === null) {
      alert("Token is missing ");
      return;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    };

    const response = await axios.get(
      "http://localhost:9091/users/v1/userlist",
      { headers }
    );
    setUser(response.data);
  };

  const handleChange = (event: any) => {
    if (event.target) {
      const { name, value } = event.target;
      setExpenseData({ ...expenseData, [name]: value });
    } else {
      setExpenseData({ ...expenseData, date: event.$d });
    }
  };

  const handleWheel = (event: any) => {
    event.target?.blur();
  };
  const handleSubmit = (event: any) => {
    if (
      expenseData.expenseType &&
      expenseData.amount &&
      expenseData.date &&
      expenseData.expenseMadeBy
    ) {
      console.log(expenseData);
    } else {
      setFirstLoad(true);
      alert("please fillup the mandatory firlds");
    }
  };
  return (
    <>
      <div>AddExpense</div>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="expense-type-label">Expense Type</InputLabel>
          <Select
            sx={{ width: 300 }}
            labelId="expense-type-label"
            id="expense-type"
            value={expenseData.expenseType}
            label="ExpenseType"
            name="expenseType"
            onChange={handleChange}
            error={!expenseData.expenseType && firstLoad}
          >
            {expenseTypes.map(({ value, label }, index) => (
              <MenuItem value={value} key={index}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel id="expense-madeby-label">Expense Made By</InputLabel>
          <Select
            sx={{ width: 300 }}
            labelId="expense-madeby-label"
            id="expense-madeby"
            value={expenseData.expenseMadeBy}
            label="expenseMadeBy"
            name="expenseMadeBy"
            onChange={handleChange}
            error={!expenseData.expenseMadeBy && firstLoad}
          >
            {user.map((u, i) => (
              <MenuItem value={u.username} key={i}>
                {u.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <FormControl sx={{ m: 1 }}>
          <TextField
            sx={{ width: 300 }}
            inputProps={{ min: 0 }}
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            type="number"
            name="amount"
            onChange={handleChange}
            onWheel={handleWheel}
            error={!expenseData.amount && firstLoad}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              views={["year", "day"]}
              sx={{ width: 300 }}
              label="Date of the expense"
              onChange={handleChange}
              name="date"
              slotProps={{
                textField: {
                  error: !expenseData.date,
                },
              }}
            />
          </LocalizationProvider>
        </FormControl>
      </Box>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <FormControl sx={{ m: 1 }}>
          <TextField
            sx={{ width: 500 }}
            multiline
            label="Description"
            name="notes"
            InputProps={{
              inputComponent: TextareaAutosize,
              rows: 3,
            }}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
      <FormControl sx={{ m: 1 }}>
        <Button
          sx={{ width: 160, height: 50 }}
          variant="contained"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </>
  );
};

export default AddExpense;
