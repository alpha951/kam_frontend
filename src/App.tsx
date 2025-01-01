import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from './store/store';
import LoginPage from './pages/Login';
import { AuthLayout } from './layouts/AuthLayout';
import { MainLayout } from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const ProtectedRoute = () => {
  const { token } = useAppSelector((state) => state.auth);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const PublicRoute = () => {
  const { token } = useAppSelector((state) => state.auth);
  if (token) {
    return <Navigate to="/accounts" replace />;
  }
  return <Outlet />;
};


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Root redirect */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Public routes */}
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Route>

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/home" element={Home} />
          </Route>
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
