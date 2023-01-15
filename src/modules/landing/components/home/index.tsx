import Reveal from '_components/reveal';
import { useResumeContext } from '_modules/resume/hooks/useContext';
import './style.css'
export default () => {

  const { dispatch: dispatchResume } = useResumeContext();


  return (
    <section className='landing-home'>
      <Reveal
        type='zoomIn'
        className='landing-home-present'
        treshold={0.5}
        delay={700}
      >
        <h1 className="landing-title">Hi, I'm <span className='landing-highlight'>Hugo</span></h1>
        <h2 className="landing-subtitle">I'm a <span className='landing-highlight'>Game Developer</span></h2>
      </Reveal>

      <Reveal
        type='zoomIn'
        className='landing-home-description'
        treshold={0.5}
        delay={700}
      >
        <p
          className="landing-description"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ducimus corrupti fuga nesciunt impedit eaque maxime suscipit architecto temporibus molestiae adipisci blanditiis, nemo deserunt, illo iusto necessitatibus consequuntur laudantium velit.

        </p>
        <div className="landing-line" />
        <span
          className='landing-info'
          onClick={() => dispatchResume({ type: 'openResume' })}
        >
          About me
        </span>

      </Reveal>

    </section>
  )
}