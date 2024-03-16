import React, { useState } from 'react';
import { Box, Button, Container, Typography, Avatar, Grid } from '@mui/material';
import { Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';


const BoxWithImageAndButtons = () => {
  const [isToggled, setIsToggled] = useState(false);

  const [isOutlined, setIsOutlined] = useState(true);
  const [buttonBackground, setButtonBackground] = useState('transparent');


  const [is1Outlined, setIs1Outlined] = useState(true);
  const [button1Background, setButton1Background] = useState('transparent');

  const [is2Outlined, setIs2Outlined] = useState(true);
  const [button2Background, setButton2Background] = useState('transparent');

  const [is3Outlined, setIs3Outlined] = useState(true);
  const [button3Background, setButton3Background] = useState('transparent');



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


  const handleToggle = () => {
    setIsToggled(!isToggled);
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
        </Container>

        


    </div>
    



  );
};

export default BoxWithImageAndButtons;
