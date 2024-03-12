import { ThemeProvider } from '@emotion/react';
import { Copyright } from '@mui/icons-material';
import { Container, CssBaseline, Box, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, createTheme } from '@mui/material';
import React, { useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import assets from '../../assets/assets';
import axios from 'axios';

const defaultTheme = createTheme();



const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate ();

  const handleLogin = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      console.log(email);
      console.log(password);

      const api = axios.create({
        baseURL : 'http://localhost:9091/',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type':  'application/json'
        }
      });
      const response = await api.get('/login?username='+email+'&password='+password);
      const data = response.data;
      if (response.status === 200) {
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
        navigate('/');
      } else {
        // handle error
        console.log(response);
      }
    } catch (error) {
      // handle error
      console.log('Error in post call')
    }
  }     

    return (
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
             <Typography variant="h6"
        sx={
          {       
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none'
          }
        } 
        >ZEBRA
        </Typography>
            <Box component="img"
                sx={{ 

                height: 50
                }}
                alt="HouseClay-Zebra"
                src={assets.images.sign_in}
         ></Box>
            <Box component="form"  onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={''} >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={''}  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider> 
    )
}

export default Login;