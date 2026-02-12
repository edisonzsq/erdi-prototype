import './Dashboard.css';

const DASHBOARD_SECTIONS = [
  {
    title: 'Real GDP Growth',
    intro: 'Real GDP growth across Asia and the Pacific continues to show resilience. Southeast Asia leads with growth rates above 5%, supported by domestic demand and export recovery. South Asia and the Pacific show varied performance, with India and Fiji among the fastest-growing economies.',
    data: [
      { label: 'Southeast Asia', value: 5.2 },
      { label: 'South Asia', value: 6.1 },
      { label: 'Central Asia', value: 4.3 },
      { label: 'Pacific', value: 3.8 },
      { label: 'East Asia', value: 4.5 },
    ],
    unit: '%',
  },
  {
    title: 'Inflation Trends',
    intro: 'Inflation has eased across most member economies in 2024–2025. Several central banks have begun cautious monetary easing as headline inflation moves within target bands. Food and energy prices remain key drivers of volatility in some economies.',
    data: [
      { label: 'Philippines', value: 3.2 },
      { label: 'Vietnam', value: 2.8 },
      { label: 'Indonesia', value: 2.5 },
      { label: 'Thailand', value: 1.8 },
      { label: 'India', value: 4.1 },
    ],
    unit: '%',
  },
  {
    title: 'Trade Balance (% of GDP)',
    intro: 'The external sector reflects differing patterns of trade openness and current account positions. Export-oriented economies in East and Southeast Asia maintain trade surpluses, while commodity importers often run deficits. Regional integration continues to deepen.',
    data: [
      { label: 'Vietnam', value: 4.2 },
      { label: 'Thailand', value: 2.1 },
      { label: 'Philippines', value: -2.5 },
      { label: 'Indonesia', value: 0.8 },
      { label: 'India', value: -1.2 },
    ],
    unit: '%',
  },
  {
    title: 'Labor Force Participation',
    intro: 'Labor force participation rates vary significantly across the region, influenced by demographics, education, and structural factors. Female participation remains lower than male in many economies, presenting both a gap and an opportunity for inclusive growth.',
    data: [
      { label: 'Vietnam', value: 73 },
      { label: 'Philippines', value: 61 },
      { label: 'Indonesia', value: 68 },
      { label: 'Thailand', value: 66 },
      { label: 'Regional avg', value: 65 },
    ],
    unit: '%',
  },
  {
    title: 'Government Revenue (% of GDP)',
    intro: 'Fiscal space varies across the region. Revenue mobilization remains a priority for many developing members to fund infrastructure and social spending. Tax reforms and improved collection have helped several economies expand their fiscal capacity.',
    data: [
      { label: 'Thailand', value: 18.2 },
      { label: 'Philippines', value: 16.1 },
      { label: 'Vietnam', value: 22.5 },
      { label: 'Indonesia', value: 12.8 },
      { label: 'India', value: 11.5 },
    ],
    unit: '%',
  },
  {
    title: 'Renewable Energy Share',
    intro: 'The energy transition is underway across the region. Renewables are gaining share in the power mix, supported by solar, wind, and hydropower investments. Coal still dominates in several economies, but targets and policy support for clean energy are strengthening.',
    data: [
      { label: 'Vietnam', value: 25 },
      { label: 'Philippines', value: 28 },
      { label: 'Thailand', value: 15 },
      { label: 'Indonesia', value: 22 },
      { label: 'India', value: 18 },
    ],
    unit: '%',
  },
];

function ChartBar({ label, value, unit, max }) {
  const pct = Math.abs(max) > 0 ? (Math.abs(value) / Math.abs(max)) * 100 : 0;
  const isNeg = value < 0;
  return (
    <div className="chart-row">
      <span className="chart-label">{label}</span>
      <div className="chart-bar-wrap">
        <div
          className={`chart-bar ${isNeg ? 'chart-bar-neg' : ''}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
      <span className="chart-value">
        {value}
        {unit}
      </span>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Data Dashboard</h1>
        <p className="dashboard-intro">
          Key macroeconomic and socioeconomic indicators at a glance. Explore interactive charts and trends for ADB member economies.
        </p>
      </div>

      <div className="dashboard-sections">
        {DASHBOARD_SECTIONS.map((section, i) => {
          const maxVal = Math.max(...section.data.map((d) => Math.abs(d.value)));
          return (
            <section key={i} className="dashboard-card">
              <h2>{section.title}</h2>
              <p className="dashboard-card-intro">{section.intro}</p>
              <div className="chart-container">
                {section.data.map((d, j) => (
                  <ChartBar
                    key={j}
                    label={d.label}
                    value={d.value}
                    unit={section.unit}
                    max={maxVal}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
