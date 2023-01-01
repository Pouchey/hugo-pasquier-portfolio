import { useLandingContext } from '_modules/landing/hooks/useContext'
import './style.css'

export default () => {

  const { state, dispatch } = useLandingContext();

  return (
    <div 
      id="landing"
      className={state.loading ? 'loading' : 'loaded'}
    >
      <h1
        className="landing-title" 
        onClick={() => dispatch({type:'loaded'})}
      >
        Explore my work
      </h1>
    </div>
  )
}