import { useLandingContext } from '_modules/landing/hooks/useContext'
import './style.css'

export default () => {

  const {dispatch:dispatchLanding } = useLandingContext();

  const handleClick = (e: any) => {
    e.stopPropagation()
    dispatchLanding({type:'loaded'})
  }  

  return(
    <section className='landing-explore'>
    <h1
      className="landing-explore-title" 
      onClick={handleClick}
    >
      Explore my work
    </h1>
  </section>
  )
}
