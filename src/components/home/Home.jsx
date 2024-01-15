import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'
import "./Home.css"
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <div className='contentWrapper'>
        <HomeLeft/>
        <HomeRight/>
  
    </div>
  )
}

export default Home