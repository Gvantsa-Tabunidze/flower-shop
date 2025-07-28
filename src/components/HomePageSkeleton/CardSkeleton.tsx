import { Skeleton, Typography } from '@mui/material'
import React from 'react'

const CardSkeleton = () => {
  return (
    <div style={{width:'240px'}}>
      <Skeleton variant="rectangular" width={240} height={240} animation='wave' 
      style={{backgroundColor:'#f2eeef', borderRadius:'8px',marginBottom:'12px'}} />
       <Typography variant="h5">
            <Skeleton style={{backgroundColor:'#f2eeef', width:'200px'}} animation='wave'  /> 
        </Typography>
       <Typography variant="body1">
            <Skeleton style={{backgroundColor:'#f2eeef', width:'160px'}} animation='wave' /> 
        </Typography>
       <Typography variant="body1">
            <Skeleton style={{backgroundColor:'#f2eeef', width:'160px'}} animation='wave' /> 
        </Typography>
    </div>
  )
}

export default CardSkeleton
