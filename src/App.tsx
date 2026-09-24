import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

// Secondary pages are code-split so the home page loads as little as possible.
const FlipRolesPage = lazy(() => import('./pages/FlipRolesPage'));
const SchoolProductPage = lazy(() => import('./pages/SchoolProductPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="fliproles" element={<FlipRolesPage />} />
          <Route path="products/school-management" element={<SchoolProductPage />} />
          {/* The retired hospital product's old URL. */}
          <Route path="products/hms" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
