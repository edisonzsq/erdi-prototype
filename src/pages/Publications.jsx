import { Link } from 'react-router-dom';
import './Publications.css';

const articles = [
  {
    id: 1,
    title: 'GDP Growth and Sectoral Composition in Asia and the Pacific',
    excerpt: 'Analysis of real GDP growth and the shift from agriculture to industry and services across member economies. Includes dataset on GDP at constant prices and sectoral value-added (agriculture, industry, services) as share of GDP.',
    category: 'National Accounts',
    date: 'January 2025',
    slug: 'gdp-growth-sectoral',
  },
  {
    id: 2,
    title: 'Labor Force and Employability Indicators',
    excerpt: 'Review of labor force participation, employment by sector, and key employability metrics. Policy implications for skills development and job creation. Dataset: Labor force, employment rates, and population (% annual change).',
    category: 'Population & Labor',
    date: 'December 2024',
    slug: 'labor-employability',
  },
  {
    id: 3,
    title: 'Fiscal and Monetary Policies Affecting Economic Stability',
    excerpt: 'How government finance and monetary policy settings influence inflation, exchange rates, and growth. Data on government revenue/expenditure, money supply, CPI (% annual change), and interest rates across the region.',
    category: 'Money, Finance & Prices',
    date: 'November 2024',
    slug: 'policies-economic-stability',
  },
];

export default function Publications() {
  return (
    <div className="publications">
      <h1>Publications</h1>
      <p className="publications-intro">
        Reports and briefs on economic indicators, datasets, and policy-related analysis for Asia and the Pacific.
      </p>
      <ul className="article-list">
        {articles.map((a) => (
          <li key={a.id} className="article-card">
            <span className="article-category">{a.category}</span>
            <h2>
              <Link to={`/publications/${a.slug}`}>{a.title}</Link>
            </h2>
            <p className="article-excerpt">{a.excerpt}</p>
            <span className="article-date">{a.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
