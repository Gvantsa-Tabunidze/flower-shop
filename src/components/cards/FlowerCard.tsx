import type { FlowerCardProps } from '@/interfaces/FlowerCardProps'
import { Box } from '@mui/material'
import React from 'react'
import BaseCard from './BaseCard'

const FlowerCard:React.FC<FlowerCardProps> = ({price,img, ...rest}) => {
  return (
    <Box>
      <img src={img} alt={img} />
      <small>{price}</small>
      <BaseCard {...rest} />
    </Box>
  )
}

export default FlowerCard
