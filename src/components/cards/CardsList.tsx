import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import React, { useEffect} from 'react'
import FlowerCard from './FlowerCard'
import { getFlowers } from '@/store/flowers/flowersThunks'


const CardsList:React.FC = () => {
const {flowersList} = useAppSelector(state=>state.flowersReducer)
const dispatch = useAppDispatch()


useEffect(()=>{
   dispatch(getFlowers())
},[])

console.log(flowersList)

  return (
    <div>
        {flowersList.length > 0 ? flowersList.map(({id,name,price,category, img, inStock, origin, bestSeller})=>
       <FlowerCard key={id} name={name}  price={price}  category={category} inStock={inStock}  img={img} origin={origin} bestSeller={bestSeller}/>
    ) : <h2>Fetching flowers failed</h2>}
      
    </div>
  )
}

export default CardsList
