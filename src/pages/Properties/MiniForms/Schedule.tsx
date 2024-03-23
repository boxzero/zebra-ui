import React, { useState } from 'react';
import { Box, Button, Container, Typography, Avatar, Grid, IconButton,MenuItem,Menu } from '@mui/material';
import { Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Schedule = () => {

  const [isOutlined, setIsOutlined] = useState(true);
  const [buttonBackground, setButtonBackground] = useState('transparent');


  const [is1Outlined, setIs1Outlined] = useState(true);
  const [button1Background, setButton1Background] = useState('transparent');

  const [is2Outlined, setIs2Outlined] = useState(true);
  const [button2Background, setButton2Background] = useState('transparent');

  const [is3Outlined, setIs3Outlined] = useState(true);
  const [button3Background, setButton3Background] = useState('transparent');


    const [is4Outlined, setIs4Outlined] = useState(true);
  const [button4Background, setButton4Background] = useState('transparent');


    const [is5Outlined, setIs5Outlined] = useState(true);
  const [button5Background, setButton5Background] = useState('transparent');

    const [is6Outlined, setIs6Outlined] = useState(true);
  const [button6Background, setButton6Background] = useState('transparent');

  // clock

  const options = ['12:00 AM', '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM','05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];
  const [startTimeAnchorEl, setStartTimeAnchorEl] = useState<null | HTMLElement>(null);
  const [endTimeAnchorEl, setEndTimeAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedStartTime, setSelectedStartTime] = useState<string>('');
  const [selectedEndTime, setSelectedEndTime] = useState<string>('');

  const handleStartTimeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStartTimeAnchorEl(event.currentTarget);
  };

  const handleEndTimeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEndTimeAnchorEl(event.currentTarget);
  };

  const handleClose = (type: 'start' | 'end') => {
    if (type === 'start') {
      setStartTimeAnchorEl(null);
    } else {
      setEndTimeAnchorEl(null);
    }
  };

  const handleOptionSelect = (option: string, type: 'start' | 'end') => {
    if (type === 'start') {
      setSelectedStartTime(option);
      handleClose('start');
    } else {
      setSelectedEndTime(option);
      handleClose('end');
    }
  };

  const handleButtonClick = () => {
    setIsOutlined(!isOutlined);
    setButtonBackground(isOutlined ? 'green' : 'transparent');
  };

  const handleButton1Click = () => {
    setIs1Outlined(!is1Outlined);
    setButton1Background(is1Outlined ? 'green' : 'transparent');
  };

  const handleButton2Click = () => {
    setIs2Outlined(!is2Outlined);
    setButton2Background(is2Outlined ? 'green' : 'transparent');
  };


  const handleButton3Click = () => {
    setIs3Outlined(!is3Outlined);
    setButton3Background(is3Outlined ? 'green' : 'transparent');
  };


  // availability

    const handleButton4Click = () => {
    setIs4Outlined(!is4Outlined);
    setButton4Background(is4Outlined ? 'green' : 'transparent');
  };

      const handleButton5Click = () => {
    setIs5Outlined(!is5Outlined);
    setButton5Background(is5Outlined ? 'green' : 'transparent');
  };

      const handleButton6Click = () => {
    setIs6Outlined(!is6Outlined);
    setButton6Background(is6Outlined ? 'green' : 'transparent');
  };


  return (
    <div>
      <Container sx={{ display: 'flex', gap: '110px', alignItems: 'center' }}>
        <Box sx={{
          backgroundColor: '#fff', 
          border: '1px solid #fff',
          borderRadius: 1,

          width: '20000px',
          p: 3
        }}>
          <div>
            <Typography variant="h6">Freshly Painted House gets Rented out 73% Faster</Typography>
          </div>
          <Chip
            icon={
              <Avatar sx={{ width: 24, height: 24, backgroundColor: 'red' }}> 
                <CheckIcon style={{ color: 'white' }} /> 
              </Avatar>
            }
            label="Price Match Guarantee"
            variant="outlined"
            sx={{ backgroundColor: '#f5f5f5', margin: '30px' }} 
          />
          <Chip
            icon={
              <Avatar sx={{ width: 24, height: 24, backgroundColor: 'red' }}>
                <CheckIcon style={{ color: 'white' }} /> 
              </Avatar>
            }
            label="1 year warranty"
            variant="outlined"
            sx={{ backgroundColor: '#f5f5f5' }} 
          />
          
          <Button sx={{ marginRight: '90px', marginLeft: '10px' }}
            variant={isOutlined ? 'outlined' : 'contained'}
            style={{
              color: 'black',
              backgroundColor: buttonBackground,
              borderColor: 'black',
              height: '50px'
            }}
            onClick={handleButtonClick}
          >
            {isOutlined ? 'Tell Me The Price' : 'Tell Me The Price'}
          </Button>

          <Button
            variant={is1Outlined ? 'outlined' : 'contained'}
            style={{
              color: 'black',
              backgroundColor: button1Background,
              borderColor: 'black',
              height: '50px'
            }}
            onClick={handleButton1Click}
          >
            {is1Outlined ? "I Don't Want Painting" : "I Don't Want Painting"}
          </Button>
        </Box>
        <Box sx={{
          backgroundColor: '#fff', 
          border: '1px solid #fff',
          borderRadius: 1,

          width: '20000px',
          p: 3
        }}>
          <div>
            <Typography variant="h6">Tenants love a Clean and Spotless house!</Typography>
          </div>
          <Chip

            icon={
              <Avatar sx={{ width: 24, height: 24, backgroundColor: 'red' }}> 
                <CheckIcon style={{ color: 'white' }} /> 
              </Avatar>
            }
            label="Same Day Service"
            variant="outlined"
            sx={{ backgroundColor: '#f5f5f5', margin: '30px' }} 
          />


          <Chip
            icon={
              <Avatar sx={{ width: 24, height: 24, backgroundColor: 'red' }}>
                <CheckIcon style={{ color: 'white' }} /> 
              </Avatar>
            }
            label="5 Star Rated Partners"
            variant="outlined"
            sx={{ backgroundColor: '#f5f5f5' }} 
          />
          
          <Button sx={{ marginRight: '90px', marginLeft: '10px' }}
            variant={is2Outlined ? 'outlined' : 'contained'}
            style={{
              color: 'black',
              backgroundColor: button2Background,
              borderColor: 'black',
              height: '50px'
            }}
            onClick={handleButton2Click}
          >
            {is2Outlined ? 'Tell Me The Price' : 'Tell Me The Price'}
          </Button>

          <Button
            variant={is3Outlined ? 'outlined' : 'contained'}
            style={{
              color: 'black',
              backgroundColor: button3Background,
              borderColor: 'black',
              height: '50px'
            }}
            onClick={handleButton3Click}
          >
            {is3Outlined ? "I Don't Want Painting" : "I Don't Want Painting"}
          </Button>
        </Box>
        </Container>


        <br/>
        <br/>
        <br/>
        <Box sx={{display:'flex'}}>
        

        <Typography variant="h6" marginRight={84}>Availability</Typography>

        <Typography variant="h6" >Select Time Schedule</Typography>
        </Box>
         <br/>
       
       


         <Grid container spacing={1}>
      
        <Grid item xs={6}>
          <Grid container spacing={2}>
            
            <Grid item xs={4}>
              
               <Button
            variant={is4Outlined ? 'outlined' : 'contained'}
            style={{
              color: 'black',
              backgroundColor: button4Background,
              borderColor: 'black',
              height: '50px'
            }}
            onClick={handleButton4Click}
          >
            {is4Outlined ? "Everyday" : "Everyday"}
          </Button>
            </Grid>
           
            <Grid item xs={4}>
              
               <Button
            variant={is5Outlined ? 'outlined' : 'contained'}
            style={{
              color: 'black',
              backgroundColor: button5Background,
              borderColor: 'black',
              height: '50px'
            }}
            onClick={handleButton5Click}
          >
            {is5Outlined ? "Weekday" : "Weekday"}
              
           
          </Button>
            </Grid>
            
             
            <Grid item xs={4}>
              
              
               <Button
            variant={is6Outlined ? 'outlined' : 'contained'}
            style={{
              color: 'black',
              backgroundColor: button6Background,
              borderColor: 'black',
              height: '50px'
            }}
            onClick={handleButton6Click}
          >
            {is3Outlined ? "Weekend" : "Weekend"}
          </Button>
            </Grid>
          </Grid>
        </Grid>

       
        <Grid item xs={6}>
          <Grid container spacing={0}>
            
            <Grid item xs={6}>
              
               <Button
        onClick={handleStartTimeClick}
        variant="outlined"
        style={{
          marginRight: '30px',
          color: 'black', 
          borderColor: 'black' 
        }}
        startIcon={
          <IconButton disableRipple>
            <AccessTimeIcon style={{ color: 'black' }} /> 
          </IconButton>
        }
      >
        {selectedStartTime || 'Select Start Time'}
      </Button>

       <Menu
        anchorEl={startTimeAnchorEl}
        open={Boolean(startTimeAnchorEl)}
        onClose={() => handleClose('start')}
        PaperProps={{
          style: {
            maxHeight: 200,
            width: 200,
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleOptionSelect(option, 'start')}>
            {option}
          </MenuItem>
        ))}
      </Menu>


            </Grid>
            {/* Sub-column 2 */}
            <Grid item xs={6}>
              {/* Content for sub-column 2 */}
               <Button
        onClick={handleEndTimeClick}
        variant="outlined"
        startIcon={
          <IconButton disableRipple>
            <AccessTimeIcon style={{ color: 'black' }} /> 
          </IconButton>
        }
        style={{
          color: 'black', 
          borderColor: 'black', 
          marginLeft: '10px', 
      
        }}
      >
        {selectedEndTime || 'Select End Time'}
      </Button>


      <Menu
        anchorEl={endTimeAnchorEl}
        open={Boolean(endTimeAnchorEl)}
        onClose={() => handleClose('end')}
        PaperProps={{
          style: {
            maxHeight: 200,
            width: 200,
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => handleOptionSelect(option, 'end')}>
            {option}
          </MenuItem>
        ))}
      </Menu>



            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Schedule;
