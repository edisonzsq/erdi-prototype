import './People.css';

const ECONOMISTS = [
  {
    name: 'Acalin, Julien',
    field: 'Macroeconomics, fiscal policy, international finance',
  },
  {
    name: 'Adler, Gustavo',
    field: 'International macroeconomics, exchange rates, capital flows',
  },
  {
    name: 'Agur, Itai',
    field: 'Financial stability, banking, macroprudential policy',
  },
  {
    name: 'Batini, Nicoletta',
    field: 'Monetary policy, climate change, sustainable finance',
  },
  {
    name: 'Boz, Emine',
    field: 'International macroeconomics, global value chains, capital flows',
  },
  {
    name: 'Dabla-Norris, Era',
    field: 'Inclusive growth, structural reforms, productivity',
  },
  {
    name: 'Furceri, Davide',
    field: 'Labor markets, inequality, macroeconomic policy',
  },
  {
    name: 'Garcia-Macia, Daniel',
    field: 'Growth, innovation, productivity, firm dynamics',
  },
  {
    name: 'Igan, Deniz',
    field: 'Housing markets, financial stability, macro-finance',
  },
  {
    name: 'Leigh, Daniel',
    field: 'Fiscal policy, public debt, macroeconomic forecasting',
  },
  {
    name: 'Papageorgiou, Chris',
    field: 'Growth, structural transformation, development economics',
  },
  {
    name: 'Presbitero, Andrea Filippo',
    field: 'Public debt, development finance, sovereign risk',
  },
  {
    name: 'Valencia, Fabian',
    field: 'Banking crises, financial stability, macroprudential policy',
  },
  {
    name: 'Zanna, Luis-Felipe',
    field: 'Monetary policy, open economy macroeconomics, DSGE models',
  },
];

const ECONOMISTS_BY_LETTER = ECONOMISTS.reduce((acc, economist) => {
  const letter = economist.name[0].toUpperCase();
  if (!acc[letter]) acc[letter] = [];
  acc[letter].push(economist);
  return acc;
}, {});

const LETTERS = Object.keys(ECONOMISTS_BY_LETTER).sort();

export default function People() {
  return (
    <div className="people-page">
      <header className="people-header">
        <h1>People</h1>
        <p>
          Economists working with ERDI, organized alphabetically, together with their main
          fields of expertise.
        </p>
      </header>

      <nav className="people-alpha-nav" aria-label="Alphabetical economist index">
        {LETTERS.map((letter) => (
          <a key={letter} href={`#letter-${letter}`} className="people-alpha-link">
            {letter}
          </a>
        ))}
      </nav>

      <div className="people-list">
        {LETTERS.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="people-section">
            <h2 className="people-section-heading">{letter}</h2>
            <ul className="people-section-list">
              {ECONOMISTS_BY_LETTER[letter]
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((economist) => (
                  <li key={economist.name} className="people-item">
                    <div className="people-item-name">{economist.name}</div>
                    <div className="people-item-field">{economist.field}</div>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

