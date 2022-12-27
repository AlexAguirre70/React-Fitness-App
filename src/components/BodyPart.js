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

        <img src={Icon} alt ='dumbell' style={{width:'50px',height:
        '50px', padding:'5px'}} 
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625':'',
            backgroundColor: 'fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'

        }} onClick={()=>{
            setBodyPart(item);
            window.scrollTo({top: 1800, left:100, behavior: 'smooth'})
        }}
        />
        <Typography textAlign='center' fontWeight='bold' color='#3A1212' textTransform='capitalize' >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart