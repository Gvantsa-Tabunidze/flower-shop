
import { Box } from '@mui/material'
import React from 'react'
import BaseCard from './BaseCard'
import type { FlowerCardProps } from '@/interfaces/cards/FlowerCardProps'

const FlowerCard:React.FC<FlowerCardProps> = ({id, price, img, category, ...rest}) => {
  
  return (
    <Box>
      {/* <h2>{name}</h2>
      <p>{description}</p> */}
      <img src={img} alt={img} />
      <p>{price}</p>
      <p>{category}</p>
      <BaseCard {...rest} />
    </Box>
  )
}

export default FlowerCard


