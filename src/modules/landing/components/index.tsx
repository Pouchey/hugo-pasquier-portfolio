import { useLandingContext } from '_modules/landing/hooks/useContext'
import './style.css'

export default () => {

  const { state, dispatch } = useLandingContext();

  const handleClick = (e: any) => {
    e.stopPropagation()
    dispatch({type:'loaded'})
  }


  return (
    <div 
      id="landing"
      className={state.loading ? 'loading' : 'loaded'}
    >
      <div className='landing-content'>
        <h1 className="landing-title">Hi, I'm <span className="landing-name">Jorge</span></h1>
        <h2 className="landing-subtitle">I'm a <span className="landing-subtitle--highlight">Frontend Developer</span></h2>
      </div>

      <div className='landing-explore'>
        <h1
          className="landing-explore-title" 
          onClick={handleClick}
        >
          Explore my work
        </h1>
      </div>
    </div>
  )
}