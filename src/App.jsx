import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import WorkspaceLayout from './components/WorkspaceLayout';
import Landing from './pages/Landing';
import Publications from './pages/Publications';
import PublicationDetail from './pages/PublicationDetail';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import WorkspaceSpace from './pages/WorkspaceSpace';
import './App.css';

function ProtectedWorkspace({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function WorkspaceRedirect() {
  return <Navigate to="/workspace/space/personal" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="publications" element={<Publications />} />
            <Route path="publications/:slug" element={<PublicationDetail />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="login" element={<Login />} />
            <Route
              path="workspace"
              element={
                <ProtectedWorkspace>
                  <WorkspaceLayout />
                </ProtectedWorkspace>
              }
            >
              <Route index element={<WorkspaceRedirect />} />
              <Route path="space/:spaceId" element={<WorkspaceSpace />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
