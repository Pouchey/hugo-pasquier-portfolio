import React, { Suspense } from 'react'
import UI from "_modules/ui/components"
import Landing from "_modules/landing/components"
import Resume from "_modules/resume/components"
import { LandingProvider } from "_modules/landing/hooks/useContext"
import { ResumeProvider } from "_modules/resume/hooks/useContext"

const LazyScene = React.lazy(() => import("_modules/scene/components"))

function App() {


  return (
    <LandingProvider>
      <ResumeProvider>
          <div id="app">
            <UI/>
            <Landing />
            <Suspense fallback={null}>
              <LazyScene />
            </Suspense>
            <Resume/>
          </div>
      </ResumeProvider>
    </LandingProvider>
  )
}

export default App
