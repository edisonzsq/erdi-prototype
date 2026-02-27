import { useState } from 'react';
import './KnowledgeProducts.css';

const SECTIONS = [
  {
    id: 'flagship',
    title: 'Flagship Reports',
    description:
      'High-profile, cross-cutting reports that synthesize major trends and insights for Asia and the Pacific.',
  },
  {
    id: 'technical',
    title: 'Technical Reports',
    description:
      'In-depth analytical work, data notes, and methodological papers produced by ERDI and partners.',
  },
  {
    id: 'working',
    title: 'Working Papers',
    description:
      'Research-in-progress that opens up new questions, methods, and data sources for discussion.',
  },
  {
    id: 'policy',
    title: 'Policy Briefs',
    description:
      'Concise, decision-ready summaries that translate evidence into actionable policy messages.',
  },
  {
    id: 'journals',
    title: 'In-house Journals',
    description:
      'Regular issues featuring curated articles, data stories, and commentary from ERDI economists.',
  },
];

const MOCK_ITEMS_PER_SECTION = 18;
const PAGE_SIZE = 5;

function buildMockItems(sectionId, sectionTitle) {
  return Array.from({ length: MOCK_ITEMS_PER_SECTION }).map((_, idx) => ({
    id: `${sectionId}-${idx + 1}`,
    title: `${sectionTitle} ${idx + 1}`,
    date: `2025-${String(((idx % 12) + 1)).padStart(2, '0')}-15`,
    summary:
      'This is a placeholder summary for a knowledge product. Replace with real metadata once the API is connected.',
  }));
}

const SECTION_ITEMS = SECTIONS.reduce((acc, section) => {
  acc[section.id] = buildMockItems(section.id, section.title);
  return acc;
}, {});

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
          Discover ERDI&apos;s flagship publications, technical outputs, and
          research products that translate data into insight for decision-makers.
        </p>
      </header>

      {viewMode === 'overview' && (
        <section className="kp-sections-grid">
          {SECTIONS.map((s) => {
            const latest = SECTION_ITEMS[s.id][0];
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
                  <h3 className="kp-preview-title">{latest.title}</h3>
                  <p className="kp-preview-meta">Published {latest.date}</p>
                  <p className="kp-preview-summary">{latest.summary}</p>
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

