import type { IbaseCard } from '@/interfaces/BaseCardInterface'
import { Box } from '@mui/material'
import React from 'react'

const BaseCard:React.FC<IbaseCard> = ({title, description}) => {
  return (
    <Box>
      <h1>{title}</h1>
      <p>{description}</p>
    </Box>>
  )
}

export default BaseCard
