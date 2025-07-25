import type { IbaseCard } from '@/interfaces/cards/BaseCardInterface'
import { Box, Typography } from '@mui/material'
import React from 'react'

const BaseCard:React.FC<IbaseCard> = ({name, category}) => {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column'}}>
      <Typography variant='h5' sx={{color:'#2f3542', fontWeight:'600'}}>{name}</Typography>
      <Typography variant='body1' sx={{color:'#a5b1c2'}}>{category}</Typography>
    </Box>
    </>
  )
}

export default BaseCard
