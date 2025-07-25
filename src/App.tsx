import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useRoutesConfig } from '@/router/routesConfig';
import { useEffect } from 'react';
import { ResponsiveLayout } from './components/website/layout/ResponsiveLayout';
import { ProfessionalLayout } from './components/website/layout/ProfessionalLayout';
import { Loading } from './common/Loading';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const { websiteRoutes, authRoutes } = useRoutesConfig();

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Auth Routes with AuthLayout (standalone) */}
            {authRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}

          {/* Website Routes with Responsive Layout */}
          <Route element={<ResponsiveLayout />}>
            {websiteRoutes
              .filter(route => route.path !== '/demo/professional')
              .map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
          </Route>

          {/* Demo route with professional layout */}
          <Route
            path="/demo/professional"
            element={
              <ProfessionalLayout>
                {websiteRoutes.find(r => r.path === '/demo/professional')?.element}
              </ProfessionalLayout>
            }
          />

       

          {/* Fallback route */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;