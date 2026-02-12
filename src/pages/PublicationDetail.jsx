import { useParams, Link } from 'react-router-dom';
import './PublicationDetail.css';

const articles = {
  'gdp-growth-sectoral': {
    title: 'GDP Growth and Sectoral Composition in Asia and the Pacific',
    category: 'National Accounts',
    date: 'January 2025',
    body: `This report examines real GDP growth and the evolving sectoral composition across ADB member economies. Key findings include sustained growth in services in most economies, with agriculture's share of GDP declining and industry remaining significant in several developing members.

The accompanying dataset provides GDP at constant prices, GDP (% annual change), and sectoral value-added (Agriculture, Industry, Services as % of GDP) for all 49 member economies, enabling cross-country comparison and trend analysis.`,
    datasetNote: 'Dataset: National Accounts — GDP at constant prices, GDP annual change, Agriculture/Industry/Services (% of GDP).',
  },
  'labor-employability': {
    title: 'Labor Force and Employability Indicators',
    category: 'Population & Labor',
    date: 'December 2024',
    body: `Labor markets in the region continue to reflect demographic and structural shifts. This brief reviews labor force participation, employment by sector, and employability-related indicators, with policy implications for skills development and job creation.

The underlying data include labor force estimates, total population, and population (% annual change), supporting analysis of workforce dynamics and demographic dependency.`,
    datasetNote: 'Dataset: Population & Labor — Labor force, Total population, Population (% annual change).',
  },
  'policies-economic-stability': {
    title: 'Fiscal and Monetary Policies Affecting Economic Stability',
    category: 'Money, Finance & Prices',
    date: 'November 2024',
    body: `Government finance and monetary policy settings are key drivers of inflation, exchange rate stability, and growth. This report summarizes how fiscal and monetary policies have evolved and their impact on economic stability across the region.

Indicators covered include government revenue and expenditure, money and interest rates, and CPI (% annual change), with links to balance of payments and external debt where relevant.`,
    datasetNote: 'Dataset: Money, Finance & Prices — CPI (% annual change), interest rates, government finance indicators.',
  },
};

export default function PublicationDetail() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <div className="publication-detail">
        <p>Publication not found.</p>
        <Link to="/publications">← Back to Publications</Link>
      </div>
    );
  }

  return (
    <article className="publication-detail">
      <Link to="/publications" className="back-link">← Back to Publications</Link>
      <span className="article-category">{article.category}</span>
      <h1>{article.title}</h1>
      <time className="article-date">{article.date}</time>
      <div className="article-body">
        {article.body.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <aside className="dataset-note">
        <strong>Related data:</strong> {article.datasetNote}
      </aside>
    </article>
  );
}
