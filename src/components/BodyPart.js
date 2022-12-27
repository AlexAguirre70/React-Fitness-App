import React from 'react'
import { Stack, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import Icon from '../assets/icons/gym.png'
const BodyPart = ({item,setBodyPart, bodyPart}) => {
  return (
    <Stack 
        type='button' 
        alignItems='center' 
        justifyContent='center'
        className='bodyPart-card' >
        <img src={Icon} alt ='dumbell' style={{width:'40px',height:
        '40px'}} 
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625':'',
            backgroundColor: 'fff',
            borderBottomLeftRadisu: '20px',
            width: '270px',
            heigh: '270px',
            cursor: 'pointer',
            gap: '47px'

        }} />
    </Stack>
  )
}

export default BodyPart