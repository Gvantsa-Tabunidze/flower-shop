
import { Box, Typography } from '@mui/material'
import React from 'react'
import BaseCard from './BaseCard'
import type { FlowerCardProps } from '@/interfaces/cards/FlowerCardProps'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const FlowerCard:React.FC<FlowerCardProps> = ({id, price, inStock, bestSeller, origin, img, name, ...rest}) => {
  
  return (
    <Box sx={{width:'240px',padding:'16px',
      borderRadius:'8px', 
      transition: 'transform 0.5s',
      '&:hover': {
      boxShadow: '0px 6px 20px rgba(0,0,0,0.1)',
    },}} >
      <Box component = 'img' src={img} alt={`${name} image`} sx={{width:'240px', height:'240px', objectFit:'cover', borderRadius:'8px'}}/>
      <Box sx={{position:'relative'}}>
        {bestSeller ? (
          <Typography
              sx={{
                display: 'inline-block',
                backgroundColor: '#c44569',
                color: 'white',
                padding: '4px 12px',
                fontWeight: '600',
                borderRadius: '4px',
                fontSize: '0.75rem',
                userSelect: 'none',
                textTransform: 'uppercase',
                position:'absolute',
                left:'142px',
                bottom:'200px'
              }}
            >
              Bestseller
            </Typography>
      ) : null}
      </Box>

      <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <BaseCard name={name}{...rest} />
          <Box sx={{display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'end'}}>
            <Typography variant='h6' color='#c44569' fontWeight={600}>{price}</Typography>
            <Typography sx={{color:'#a5b1c2', fontSize:'small'}}>{inStock ? <span><CheckOutlinedIcon fontSize='small' color='success' /> In Stock</span>: 'Out of stock'}</Typography>
          </Box>
      </Box>
      <Typography variant='body1' color='#2f3542'>{origin}</Typography>
    </Box>
  )
}

export default FlowerCard


