import { useState } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import './WorkspaceSpace.css';

const MOCK_DATASETS = [
  { id: 'ds1', name: 'GDP growth ASEAN 2020-2024', created: '2025-02-10', sharedWith: [] },
  { id: 'ds2', name: 'Inflation comparison South Asia', created: '2025-02-08', sharedWith: ['colleague@adb.org'] },
];

export default function WorkspaceSpace() {
  const { currentSpace, spaces, setSpaces } = useOutletContext();
  const { spaceId } = useParams();
  const navigate = useNavigate();
  const [datasets, setDatasets] = useState(MOCK_DATASETS);
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [showShare, setShowShare] = useState(null);
  const [showFollow, setShowFollow] = useState(null);
  const [followPrefs, setFollowPrefs] = useState({}); // dsId -> 'immediate' | 'daily' | 'weekly'

  if (!currentSpace) {
    const first = spaces[0];
    if (first) {
      navigate(`/workspace/space/${first.id}`, { replace: true });
      return null;
    }
  }

  const handleSaveDataset = () => {
    const name = prompt('Dataset name (e.g. "Labor force by economy 2023"):');
    if (!name) return;
    setDatasets((prev) => [
      ...prev,
      { id: 'ds' + Date.now(), name, created: new Date().toISOString().slice(0, 10), sharedWith: [] },
    ]);
  };

  const handleInvite = (e) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    setSpaces((prev) =>
      prev.map((s) =>
        s.id === currentSpace.id
          ? { ...s, isCollaborative: true, members: s.members + 1 }
          : s
      )
    );
    setInviteEmail('');
    setShowInvite(false);
  };

  const handleShareDataset = (ds) => {
    const email = prompt('Share with (email):');
    if (!email) return;
    setDatasets((prev) =>
      prev.map((d) =>
        d.id === ds.id ? { ...d, sharedWith: [...(d.sharedWith || []), email] } : d
      )
    );
    setShowShare(null);
  };

  const handleFollowDataset = (dsId, pref) => {
    setFollowPrefs((prev) => ({ ...prev, [dsId]: pref }));
    setShowFollow(null);
  };

  return (
    <div className="workspace-space">
      <div className="space-toolbar">
        <div>
          <h1>{currentSpace?.name || 'Workspace'}</h1>
          <p className="space-meta">
            {currentSpace?.isCollaborative ? 'Collaborative space' : 'Personal space'} · {datasets.length} dataset{datasets.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="toolbar-actions">
          {!currentSpace?.isCollaborative && (
            <button type="button" className="btn btn-secondary" onClick={() => setShowInvite(true)}>
              Invite to collaborate
            </button>
          )}
          <button type="button" className="btn btn-primary" onClick={handleSaveDataset}>
            + Save new dataset
          </button>
        </div>
      </div>

      {showInvite && (
        <div className="modal-overlay" onClick={() => setShowInvite(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Invite to this space</h3>
            <p className="modal-desc">Turn this space into a collaborative space by inviting colleagues.</p>
            <form onSubmit={handleInvite}>
              <input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="colleague@adb.org"
                required
              />
              <div className="modal-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowInvite(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Send invite</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showFollow && (
        <div className="modal-overlay" onClick={() => setShowFollow(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Follow &quot;{showFollow.name}&quot;</h3>
            <p className="modal-desc">How would you like to be notified when this dataset changes?</p>
            <div className="follow-options">
              <button
                type="button"
                className="follow-option-btn"
                onClick={() => handleFollowDataset(showFollow.id, 'immediate')}
              >
                Immediately when there is a dataset change
              </button>
              <button
                type="button"
                className="follow-option-btn"
                onClick={() => handleFollowDataset(showFollow.id, 'daily')}
              >
                Once a day (end of day)
              </button>
              <button
                type="button"
                className="follow-option-btn"
                onClick={() => handleFollowDataset(showFollow.id, 'weekly')}
              >
                Once a week
              </button>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setShowFollow(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <section className="datasets-section">
        <h2>Datasets</h2>
        <p className="section-hint">Use the AI Assistant on the right to generate new datasets, then save them here. You can share any dataset with other users.</p>
        {datasets.length === 0 ? (
          <div className="empty-datasets">
            <p>No datasets yet. Ask the AI Assistant to generate one, then save it.</p>
          </div>
        ) : (
          <ul className="dataset-list">
            {datasets.map((ds) => (
              <li key={ds.id} className="dataset-card">
                <div className="dataset-info">
                  <h3>{ds.name}</h3>
                  <span className="dataset-date">Saved {ds.created}</span>
                  {ds.sharedWith?.length > 0 && (
                    <span className="dataset-shared">Shared with {ds.sharedWith.join(', ')}</span>
                  )}
                </div>
                <div className="dataset-actions">
                  <button
                    type="button"
                    className="btn-link"
                    onClick={() => setShowShare(showShare === ds.id ? null : ds.id)}
                  >
                    Share
                  </button>
                  {showShare === ds.id && (
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => handleShareDataset(ds)}
                    >
                      Add recipient
                    </button>
                  )}
                  <button
                    type="button"
                    className={`btn-link ${followPrefs[ds.id] ? 'is-following' : ''}`}
                    onClick={() => setShowFollow(ds)}
                  >
                    {followPrefs[ds.id] ? `Follow (${followPrefs[ds.id]})` : 'Follow'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
