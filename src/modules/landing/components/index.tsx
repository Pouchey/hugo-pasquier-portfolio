
import { useLandingContext } from '../hooks/useContext'
import './style.css'
import Header from './header'
import Home from './home'
import Projects from './projects'
import Explore from './explore'
import { useRef, useEffect } from 'react'

export default () => {

  const { state } = useLandingContext();
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (state.loading) {
      ref.current?.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [state.loading])

  return (
    <div
      id="landing"
      className={state.loading ? 'loading' : 'loaded'}
      ref={ref}
    >
      <Header />
      <Home />
      <Projects />
      <Explore />

    </div>
  )
}