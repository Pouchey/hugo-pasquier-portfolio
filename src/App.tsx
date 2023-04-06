import { useProgress } from '@react-three/drei';
import { lazy, Suspense } from 'react';

import UILoader from '_components/ui-loader';

import Landing from '_modules/landing/components';
import { LandingProvider } from '_modules/landing/hooks/useContext';
import { OverlayProvider } from '_modules/overlay/hooks/useContext';
import Resume from '_modules/resume/components';
import { ResumeProvider } from '_modules/resume/hooks/useContext';
import UI from '_modules/ui/components';

const LazyScene = lazy(() => import('_modules/scene/components'));

const App = () => {
  const { progress } = useProgress();
  return (
    <OverlayProvider>
      <LandingProvider>
        <ResumeProvider>
          <div id="app">
            <Suspense fallback={null}>
              <LazyScene />
            </Suspense>
            {progress < 100 ? (
              <UILoader />
            ) : (
              <>
                <Landing />
                <UI />
                <Resume />
              </>
            )}
          </div>
        </ResumeProvider>
      </LandingProvider>
    </OverlayProvider>
  );
};

export default App;
