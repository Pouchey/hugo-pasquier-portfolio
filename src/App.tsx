import React, { Suspense } from 'react';

import Landing from '_modules/landing/components';
import { LandingProvider } from '_modules/landing/hooks/useContext';
import { OverlayProvider } from '_modules/overlay/hooks/useContext';
import Resume from '_modules/resume/components';
import { ResumeProvider } from '_modules/resume/hooks/useContext';
import UI from '_modules/ui/components';

const LazyScene = React.lazy(() => import('_modules/scene/components'));

function App() {
  return (
    <LandingProvider>
      <ResumeProvider>
        <OverlayProvider>
          <div id="app">
            <UI />
            <Landing />
            <Suspense fallback={null}>
              <LazyScene />
            </Suspense>
            <Resume />
          </div>
        </OverlayProvider>
      </ResumeProvider>
    </LandingProvider>
  );
}

export default App;
