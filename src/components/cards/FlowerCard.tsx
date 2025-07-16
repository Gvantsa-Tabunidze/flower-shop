
import { Box } from '@mui/material'
import React from 'react'
import BaseCard from './BaseCard'
import type { FlowerCardProps } from '@/interfaces/cards/FlowerCardProps'

const FlowerCard:React.FC<FlowerCardProps> = ({id, price, inStock, bestSeller, origin, img,...rest}) => {
  
  return (
    <Box>
      
      <BaseCard {...rest} />
      <p>{price}</p>
      <small>{inStock ? 'in stock' : 'Out of stock'}</small>
      <p>{bestSeller ? 'Bestseller' : null}</p>
      <p>{origin}</p>
      <img src={img} alt={img} />
      
      
      <p></p>
      
    </Box>
  )
}

export default FlowerCard


