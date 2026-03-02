import { useState } from 'react';
import { SECTIONS, SECTION_ITEMS } from '../data/knowledgeProducts';
import './KnowledgeProducts.css';

const PAGE_SIZE = 5;

export default function KnowledgeProducts() {
  const [viewMode, setViewMode] = useState('overview'); // 'overview' | 'list'
  const [activeSectionId, setActiveSectionId] = useState(null);
  const [page, setPage] = useState(1);

  const handleMoreClick = (sectionId) => {
    setActiveSectionId(sectionId);
    setPage(1);
    setViewMode('list');
  };

  const handleBackToOverview = () => {
    setViewMode('overview');
    setActiveSectionId(null);
    setPage(1);
  };

  const section = activeSectionId
    ? SECTIONS.find((s) => s.id === activeSectionId)
    : null;

  const items = activeSectionId ? SECTION_ITEMS[activeSectionId] || [] : [];
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const pageItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="knowledge-products-page">
      <header className="kp-header">
        <h1>Knowledge Products</h1>
        <p>
          Discover ERDI&apos;s flagship publications, economic forecasts, and
          research products that translate data into insight for decision-makers.
        </p>
      </header>

      {viewMode === 'overview' && (
        <section className="kp-sections-grid">
          {SECTIONS.map((s) => {
            const sectionItems = SECTION_ITEMS[s.id] || [];
            const latest = sectionItems[0];
            return (
              <article key={s.id} className="kp-section-card">
                <div className="kp-section-main">
                  <h2>{s.title}</h2>
                  <p className="kp-section-description">{s.description}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleMoreClick(s.id)}
                  >
                    More
                  </button>
                </div>
                <div className="kp-section-preview">
                  <span className="kp-preview-label">Latest entry</span>
                  {latest ? (
                    <>
                      <h3 className="kp-preview-title">{latest.title}</h3>
                      <p className="kp-preview-meta">Published {latest.date}</p>
                      <p className="kp-preview-summary">{latest.summary}</p>
                    </>
                  ) : (
                    <p className="kp-preview-summary">No entries yet.</p>
                  )}
                </div>
              </article>
            );
          })}
        </section>
      )}

      {viewMode === 'list' && section && (
        <section className="kp-list-view">
          <div className="kp-list-header">
            <button
              type="button"
              className="btn-link"
              onClick={handleBackToOverview}
            >
              ← Back to all knowledge products
            </button>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <ul className="kp-list">
            {pageItems.map((item) => (
              <li key={item.id} className="kp-list-item">
                <div className="kp-list-item-main">
                  <h3>{item.title}</h3>
                  <p className="kp-list-meta">Published {item.date}</p>
                  <p className="kp-list-summary">{item.summary}</p>
                </div>
                <div className="kp-list-item-actions">
                  <button type="button" className="btn btn-secondary">
                    View details
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="kp-pagination">
            <button
              type="button"
              className="btn-link"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </button>
            <span className="kp-page-indicator">
              Page {page} of {totalPages}
            </span>
            <button
              type="button"
              className="btn-link"
              disabled={page === totalPages}
              onClick={() =>
                setPage((p) => Math.min(totalPages, p + 1))
              }
            >
              Next
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
