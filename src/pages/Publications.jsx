import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { publications, publicationTopics, publicationEconomies } from '../data/publications';
import './Publications.css';

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

export default function Publications() {
  const [topic, setTopic] = useState('All Topics');
  const [economy, setEconomy] = useState('All Economies');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      if (topic !== 'All Topics' && p.topic !== topic) return false;
      if (economy !== 'All Economies' && p.economy !== economy) return false;
      if (dateFrom && p.date < dateFrom) return false;
      if (dateTo && p.date > dateTo) return false;
      return true;
    });
  }, [topic, economy, dateFrom, dateTo]);

  return (
    <div className="publications">
      <h1>Publications</h1>
      <p className="publications-intro">
        Reports and briefs on economic indicators, datasets, and policy-related analysis for Asia and the Pacific.
      </p>

      <div className="publications-filters">
        <div className="filter-group">
          <label htmlFor="filter-topic">Topic</label>
          <select id="filter-topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            {publicationTopics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="filter-economy">Economy</label>
          <select id="filter-economy" value={economy} onChange={(e) => setEconomy(e.target.value)}>
            {publicationEconomies.map((ec) => (
              <option key={ec} value={ec}>{ec}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="filter-date-from">Date from</label>
          <input
            id="filter-date-from"
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="filter-date-to">Date to</label>
          <input
            id="filter-date-to"
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>
      </div>

      <p className="publications-count">
        {filtered.length} publication{filtered.length !== 1 ? 's' : ''}
      </p>

      <ul className="article-list">
        {filtered.map((a) => (
          <li key={a.id} className="article-card">
            <span className="article-category">{a.category}</span>
            <h2>
              <Link to={`/publications/${a.slug}`}>{a.title}</Link>
            </h2>
            <p className="article-excerpt">{a.excerpt}</p>
            <div className="article-meta">
              <span className="article-date">{formatDate(a.date)}</span>
              <span className="article-economy">{a.economy}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
