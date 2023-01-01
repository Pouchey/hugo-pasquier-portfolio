import { useResumeContext } from '_modules/resume/hooks/useContext'
import './style.css'

export default () => {

  const { dispatch } = useResumeContext();

  return (
    <div id="ui">
      <div className='ui-header'>
        <p className='ui-title'>Hugo Pasquier —</p>
        <span 
          className='ui-info' 
          onClick={() => dispatch({type:'openResume'})}
        >
          About me
        </span>
      </div>
      <div className='ui-footer'>
        <div>
          <div className='ui-networks'>
            <a 
              className='ui-network'
              href="https://www.linkedin.com/in/hugo-pasquier-7b6353202/" 
              target="_blank" 
              rel="noreferrer"
            >
              <img 
                className='ui-network-icon'
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" 
                alt="linkedin"/>
              <p
                className='ui-network-name'
              >Hugo Pasquier</p>
            </a>

            <a
              className='ui-network'
              href="https://www.github.com/hugopasquier"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className='ui-network-icon'
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="github"
              />
              <p
                className='ui-network-name'
              >hugopasquier</p>
            </a>
         
          </div> 
        </div>
      </div>
    </div>
    
  )
}
