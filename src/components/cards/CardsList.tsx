import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import React, { useEffect} from 'react'
import FlowerCard from './FlowerCard'
import { getFlowers } from '@/store/flowers/flowersThunks'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'


const CardsList:React.FC = () => {
const {flowersList} = useAppSelector(state=>state.flowersReducer)
const dispatch = useAppDispatch()


useEffect(()=>{
   dispatch(getFlowers())
},[])

console.log(flowersList)

  return (
    <Box sx={{
        display: 'grid',
         gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',   
            sm: 'repeat(2, 1fr)',  
            md: 'repeat(3, 1fr)',   
            lg: 'repeat(4, 1fr)',   
         },
        gap: 4, 
        padding: 2,
        margin:' 0 200px'
      }}>
        {flowersList.length > 0 ? flowersList.map(({id,name,price,category, img, inStock, origin, bestSeller})=>
        <Link to={'/'} style={{textDecoration:'none'}} >
          <FlowerCard key={id} name={name}  price={price}  category={category} inStock={inStock}  img={img} origin={origin} bestSeller={bestSeller}/>
       </Link>
    ) : <h2>Fetching flowers failed</h2>}
      
   </Box>
  )
}

export default CardsList
