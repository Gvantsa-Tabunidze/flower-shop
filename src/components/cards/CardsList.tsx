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
        {flowersList.length > 0 ? flowersList.map(({id,name,description,price,category, img})=>
       <FlowerCard key={id} name={name}  description={description} price={price} category={category} img={img}/>
    ) : <h2>Fetching flowers failed</h2>}
      
    </div>
  )
}

export default CardsList
