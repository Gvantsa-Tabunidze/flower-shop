import CardsList from '@/components/cards/CardsList'
import React from 'react'

const Home = () => {
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <h1>Hey! It's a home-page</h1>
      <CardsList />
    </div>
  )
}

export default Home
