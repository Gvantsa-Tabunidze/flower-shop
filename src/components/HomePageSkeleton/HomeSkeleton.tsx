import { Grid, Skeleton, Typography } from '@mui/material'
import CardSkeleton from './CardSkeleton'


const HomeSkeleton = () => {
 

  return (
    <div style={{display:'flex', flexDirection:'column', gap:'64px', alignItems:'center'}}>
        <Typography variant="h1" sx={{marginBottom:'40px'}}>
            <Skeleton style={{backgroundColor:'#f2eeef', width:'1100px'}} animation='wave' /> 
        </Typography>
        <Grid  sx={{
        display: 'grid',
         gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',   
            sm: 'repeat(2, 1fr)',  
            md: 'repeat(3, 1fr)',   
            lg: 'repeat(4, 1fr)',   
         },
        gap: 6, 
        justifyItems:'center'
      }}>
           <CardSkeleton />
           <CardSkeleton />
           <CardSkeleton />
           <CardSkeleton />
           <CardSkeleton />
           <CardSkeleton />
           <CardSkeleton />
           <CardSkeleton />
        </Grid>
    </div>
  )
}

export default HomeSkeleton
