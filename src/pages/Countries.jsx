import { Link } from 'react-router-dom';
import './Countries.css';

const REGIONS = [
  {
    name: 'Southeast Asia',
    countries: [
      { slug: 'philippines', name: 'Philippines' },
      { slug: 'vietnam', name: 'Vietnam' },
      { slug: 'indonesia', name: 'Indonesia' },
      { slug: 'thailand', name: 'Thailand' },
      { slug: 'malaysia', name: 'Malaysia' },
      { slug: 'singapore', name: 'Singapore' },
      { slug: 'cambodia', name: 'Cambodia' },
      { slug: 'myanmar', name: 'Myanmar' },
    ],
  },
  {
    name: 'South Asia',
    countries: [
      { slug: 'india', name: 'India' },
      { slug: 'bangladesh', name: 'Bangladesh' },
      { slug: 'pakistan', name: 'Pakistan' },
      { slug: 'sri-lanka', name: 'Sri Lanka' },
      { slug: 'nepal', name: 'Nepal' },
    ],
  },
  {
    name: 'Central and West Asia',
    countries: [
      { slug: 'kazakhstan', name: 'Kazakhstan' },
      { slug: 'uzbekistan', name: 'Uzbekistan' },
      { slug: 'georgia', name: 'Georgia' },
      { slug: 'azerbaijan', name: 'Azerbaijan' },
    ],
  },
  {
    name: 'The Pacific',
    countries: [
      { slug: 'papua-new-guinea', name: 'Papua New Guinea' },
      { slug: 'fiji', name: 'Fiji' },
      { slug: 'samoa', name: 'Samoa' },
    ],
  },
];

export default function Countries() {
  return (
    <div className="countries-page">
      <h1>Countries</h1>
      <p className="countries-intro">
        Country outlooks and key economic indicators for ADB member economies. Select a country to view its profile, key data, and analysis.
      </p>

      {REGIONS.map((region) => (
        <section key={region.name} className="region-section">
          <h2>{region.name}</h2>
          <div className="country-grid">
            {region.countries.map((c) => (
              <Link key={c.slug} to={`/countries/${c.slug}`} className="country-card">
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
