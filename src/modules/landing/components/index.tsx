
import { useLandingContext } from '../hooks/useContext'
import './style.css'
import Header from './header'
import Home from './home'
import Projects from './projects'
import Explore from './explore'

export default () => {



  const { state} = useLandingContext();

  return (
    <div 
      id="landing"
      className={state.loading ? 'loading' : 'loaded'}
    >
      <Header/>
      <Home/>
      <Projects/>
      <Explore/>
      
    </div>
  )
}