import { useParams, Link } from 'react-router-dom';
import { getPublicationBySlug } from '../data/publications';
import './PublicationDetail.css';

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

export default function PublicationDetail() {
  const { slug } = useParams();
  const article = getPublicationBySlug(slug);

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
      <time className="article-date">{formatDate(article.date)}</time>
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
