import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px'pt='24px'>  
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography variant='h6' pb='40px' mt='25px'>
          Made with  by Alex Aguirre courtesy of <a href='https://www.youtube.com/watch?v=KBpoBc98BwM'>Javascript Mastery </a>
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer