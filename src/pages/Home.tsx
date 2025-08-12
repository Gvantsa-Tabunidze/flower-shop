import CardsList from '@/components/cards/CardsList'
import { Button } from '@mui/material'
import { Link} from 'react-router-dom'


const Home = () => {
 

  return (
    <div style={{display:'flex', flexDirection:'column',padding:'0px 200px 0px 200px', paddingTop:'100px'}}>
     <Button variant='outlined' sx={{width:'260px'}}><Link to='subscribtion'>Subscribe</Link></Button>
      <CardsList />
    </div>
  )
}

export default Home
