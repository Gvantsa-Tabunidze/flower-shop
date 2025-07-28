import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import React, { useEffect} from 'react'
import FlowerCard from './FlowerCard'
import { getFlowers } from '@/store/flowers/flowersThunks'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeSkeleton from '../HomePageSkeleton/HomeSkeleton'


const CardsList:React.FC = () => {
const {flowersList, isLoading, error} = useAppSelector(state=>state.flowersReducer)
const dispatch = useAppDispatch()


useEffect(()=>{
   dispatch(getFlowers())
},[dispatch, flowersList.length])

console.log(flowersList)

  if (isLoading) return <HomeSkeleton />;
  if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>;


  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
       <Typography variant='h4' sx={{fontWeight:'600', marginBottom:'40px'}}>Our flowers</Typography>

       <Box sx={{
        display: 'grid',
         gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',   
            sm: 'repeat(2, 1fr)',  
            md: 'repeat(3, 1fr)',   
            lg: 'repeat(4, 1fr)',    
         },
        gap: 4, 
         justifyItems:'center'
      }}>
        {flowersList.length > 0 ? flowersList.map(({id,name,price,category, img, inStock, origin, bestSeller})=>
        <Link to={'/'} key={id} style={{textDecoration:'none'}} >
          <FlowerCard  name={name}  price={price}  category={category} inStock={inStock}  img={img} origin={origin} bestSeller={bestSeller}/>
       </Link>
    ) : <h2>Fetching flowers failed</h2>}
      
   </Box>
    </Box>

    
    
    
  )
}

export default CardsList
