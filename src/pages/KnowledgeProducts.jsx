import { useState, useMemo } from 'react';
import publicationsData from '../data/publications.json';
import './KnowledgeProducts.css';

const PAGE_SIZE = 10;

const CATEGORY_MAP = {
  'Signature Product': 'Flagship Reports',
  'Technical Study': 'Technical Reports',
};

function getDisplayCategory(category) {
  return CATEGORY_MAP[category] ?? category;
}

function formatDate(isoDate) {
  if (!isoDate) return '';
  const [y, m, d] = isoDate.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const mi = parseInt(m, 10) - 1;
  return `${parseInt(d, 10)} ${months[mi]} ${y}`;
}

export default function KnowledgeProducts() {
  const [viewMode, setViewMode] = useState('overview');
  const [activeDisplayCategory, setActiveDisplayCategory] = useState(null);
  const [page, setPage] = useState(1);

  const { sections, itemsBySection } = useMemo(() => {
    const items = (publicationsData || []).map((item) => ({
      ...item,
      displayCategory: getDisplayCategory(item.category),
    }));
    const bySection = {};
    items.forEach((item) => {
      const key = item.displayCategory;
      if (!bySection[key]) bySection[key] = [];
      bySection[key].push(item);
    });
    Object.keys(bySection).forEach((key) => {
      bySection[key].sort((a, b) => (b.published_date || '').localeCompare(a.published_date || ''));
    });
    const sectionOrder = ['Flagship Reports', 'Technical Reports'];
    const rest = Object.keys(bySection).filter((k) => !sectionOrder.includes(k)).sort();
    const sections = [...sectionOrder.filter((k) => bySection[k]?.length), ...rest];
    return { sections, itemsBySection: bySection };
  }, []);

  const handleMoreClick = (displayCategory) => {
    setActiveDisplayCategory(displayCategory);
    setPage(1);
    setViewMode('list');
  };

  const handleBackToOverview = () => {
    setViewMode('overview');
    setActiveDisplayCategory(null);
    setPage(1);
  };

  const items = activeDisplayCategory ? itemsBySection[activeDisplayCategory] || [] : [];
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
          {sections.map((displayCategory) => {
            const sectionItems = itemsBySection[displayCategory] || [];
            const latest = sectionItems[0];
            return (
              <article key={displayCategory} className="kp-section-card">
                <div className="kp-section-main">
                  <h2>{displayCategory}</h2>
                  <p className="kp-section-count">
                    {sectionItems.length} {sectionItems.length === 1 ? 'publication' : 'publications'}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleMoreClick(displayCategory)}
                  >
                    More
                  </button>
                </div>
                <div className="kp-section-preview">
                  <span className="kp-preview-label">Latest entry</span>
                  {latest ? (
                    <>
                      <h3 className="kp-preview-title">{latest.title}</h3>
                      <p className="kp-preview-meta">
                        {latest.published_date ? `Published ${formatDate(latest.published_date)}` : ''}
                        {latest.project_team && (
                          <span className="kp-preview-team"> · {latest.project_team}</span>
                        )}
                      </p>
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

      {viewMode === 'list' && activeDisplayCategory && (
        <section className="kp-list-view">
          <div className="kp-list-header">
            <button
              type="button"
              className="btn-link"
              onClick={handleBackToOverview}
            >
              ← Back to all knowledge products
            </button>
            <h2>{activeDisplayCategory}</h2>
            <p className="kp-section-count">
              {items.length} {items.length === 1 ? 'publication' : 'publications'}
            </p>
          </div>
          <ul className="kp-list">
            {pageItems.map((item) => (
              <li key={item.id} className="kp-list-item">
                <div className="kp-list-item-main">
                  <h3>{item.title}</h3>
                  {item.project_team && (
                    <p className="kp-list-team">Project team: {item.project_team}</p>
                  )}
                  <p className="kp-list-meta">
                    {item.published_date ? `Published ${formatDate(item.published_date)}` : ''}
                  </p>
                </div>
                <div className="kp-list-item-actions">
                  {item.url && item.url.length > 0 && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      View details
                    </a>
                  )}
                  {item.download_link && item.download_link.toLowerCase().endsWith('.pdf') && (
                    <a
                      href={item.download_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Download PDF
                    </a>
                  )}
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
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </button>
          </div>
        </section>
      )}
    </div>
  );
}