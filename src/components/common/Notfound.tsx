import { Typography } from '@mui/material';
import { Container, Box } from '@mui/system';
import React from 'react';
import assets from '../../assets/assets';


const Notfound = () => {
    return (
        <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <img src={assets.images.dashboard_center_logo} alt="" />
        <Box mb={2}>
          <img src={assets.images.not_found}
 alt="Not Found" />
        </Box>
      </Box>
    </Container>
    )
}

export  default Notfound;