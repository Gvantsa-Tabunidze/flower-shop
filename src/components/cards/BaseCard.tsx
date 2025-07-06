import type { IbaseCard } from '@/interfaces/cards/BaseCardInterface'
import { Box } from '@mui/material'
import React from 'react'

const BaseCard:React.FC<IbaseCard> = ({name, description}) => {
  return (
    <>
    <Box>
      <h2>{name}</h2>
      <p>{description}</p>
    </Box>
    </>
  )
}

export default BaseCard
