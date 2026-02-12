import { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AIChatPanel from './AIChatPanel';
import './WorkspaceLayout.css';

// Mock spaces and datasets - in a real app this would come from API/context
const MOCK_SPACES = [
  { id: 'personal', name: 'My Space', isCollaborative: false, members: 1 },
  { id: 'project-alpha', name: 'Project Alpha', isCollaborative: true, members: 3 },
];

export default function WorkspaceLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { spaceId } = useParams();
  const [spaces, setSpaces] = useState(MOCK_SPACES);
  const [aiPanelOpen, setAiPanelOpen] = useState(true);

  const currentSpace = spaces.find((s) => s.id === (spaceId || 'personal')) || spaces[0];

  const handleCreateSpace = () => {
    const name = prompt('Space name:');
    if (!name) return;
    const id = name.toLowerCase().replace(/\s+/g, '-');
    setSpaces((prev) => [...prev, { id, name, isCollaborative: false, members: 1 }]);
    navigate(`/workspace/space/${id}`);
  };

  if (!user) {
    navigate('/login', { replace: true });
    return null;
  }

  return (
    <div className="workspace-layout">
      <aside className="workspace-sidebar">
        <div className="sidebar-header">
          <h2>Spaces</h2>
          <button type="button" className="btn-create-space" onClick={handleCreateSpace}>
            + New space
          </button>
        </div>
        <nav className="space-list">
          {spaces.map((s) => (
            <button
              type="button"
              key={s.id}
              className={`space-item ${currentSpace?.id === s.id ? 'active' : ''}`}
              onClick={() => navigate(`/workspace/space/${s.id}`)}
            >
              <span className="space-name">{s.name}</span>
              {s.isCollaborative && <span className="space-badge">Shared</span>}
              <span className="space-members">{s.members} member{s.members !== 1 ? 's' : ''}</span>
            </button>
          ))}
        </nav>
      </aside>
      <div className="workspace-content">
        <Outlet context={{ currentSpace, spaces, setSpaces }} />
      </div>
      <AIChatPanel open={aiPanelOpen} onToggle={() => setAiPanelOpen(!aiPanelOpen)} />
    </div>
  );
}
