import React,{useState} from 'react'
import { Stack, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack 
        type='button' 
        alignItems='center' 
        justifyContent='center'
        className='bodyPart-card'
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625':'',
            backgroundColor: 'fff',
            borderBottomLeftRadius: '20px',
            width: '250px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
        }} onClick={()=>{
            setBodyPart(item);
            window.scrollTo({top: 1800, left:100, behavior: 'smooth'})
        }}  >
        <img src={Icon} alt ='dumbell' style={{width:'60px',height:
        '60px', padding:'5px'}}  />
        <Typography textAlign='center' fontWeight='bold' color='#3A1212' textTransform='capitalize' >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart