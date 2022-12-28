import React from 'react'
import { Stack, Typography, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
    const {bodyPart,gifUrl, name,target,equipment} = exerciseDetail

    const extraDetail =[
        { id:0,
          icon: BodyPartImage,
          name: bodyPart  
        },
        {   id:1,
            icon: TargetImage,
            name: target  
          },
          { id:2,
            icon: EquipmentImage,
            name: equipment  
          },
    ]
  return (
    <Stack gap='60px' sx={{
        flexDirection:{lg:'row'},
        p: '20px',
        alignItems:'center'
    }}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{gap:{lg: '35px',xs:'20px'}}}>
            <Typography variant='h4' sx={{textTransform:'capitalize'}} >
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong. The {name} is one of the best 
                exercises to target your {target}.
            </Typography>
            {extraDetail.map((item)=>(
                <Stack key={item.id} direction='row' gap='24px' alignItems='center'>
                    <Button sx={{background:'#fff2db', borderRadius: '50%', width:'100px', height:'100px'}} >
                        <img src={item.icon} alt={bodyPart} style={{height:'50px', width:'50px'}}/>
                    </Button>
                    <Typography  textTransform='capitalize' variant='h5'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>

  )
}

export default Detail