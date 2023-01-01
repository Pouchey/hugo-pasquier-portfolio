import Scene from "_modules/scene/components"
import UI from "_modules/ui/components"
import Landing from "_modules/landing/components"
import Resume from "_modules/resume/components"
import { LandingProvider } from "_modules/landing/hooks/useContext"
import { ResumeProvider } from "_modules/resume/hooks/useContext"

function App() {


  return (
    <LandingProvider>
      <ResumeProvider>
          <div id="app">
            <UI/>
            <Landing />
            <Scene/>
            <Resume/>
          </div>
      </ResumeProvider>
    </LandingProvider>
  )
}

export default App
