import Footer from './components/footer/Footer'
import { MainTitle } from './components/header/MainTitle'
import TopHeader from './components/header/TopHeader'
import Home from './components/home/Home'

const App = () => {
  return (
    <div>
      <TopHeader/>
      <MainTitle/>
      <Home/>
      {/* <Footer/> */}
    </div>
  )
}

export default App