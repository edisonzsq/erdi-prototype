import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = process.argv[2] || path.join(__dirname, '../src/data/erdi_publications.csv');
const outPath = process.argv[3] || path.join(__dirname, '../src/data/publications.json');

const MONTHS = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };

function parseDate(s) {
  if (!s || !s.trim()) return s ? s.trim() : '';
  const m = s.trim().match(/^(\d{1,2})-([A-Za-z]{3})-(\d{2})$/);
  if (!m) return s.trim();
  const mon = MONTHS[m[2]] || '01';
  return `20${m[3]}-${mon}-${m[1].padStart(2, '0')}`;
}

function parseCsvLine(line) {
  const out = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if ((c === ',' && !inQuotes) || (c === '\n' && !inQuotes)) {
      out.push(field.trim());
      field = '';
      if (c === '\n') break;
    } else {
      field += c;
    }
  }
  if (field.length) out.push(field.trim());
  return out;
}

const raw = fs.readFileSync(csvPath, 'utf8');
const lines = raw.split(/\r?\n/).filter(Boolean);
const header = parseCsvLine(lines[0]);
const publications = [];
let id = 1;

for (let i = 1; i < lines.length; i++) {
  const parts = parseCsvLine(lines[i]);
  const get = (name) => {
    const idx = header.indexOf(name);
    return idx >= 0 && parts[idx] !== undefined ? (parts[idx] || '').trim() : '';
  };
  const category = get('Category');
  const title = get('Title');
  const url = get('URL');
  const project_team = get('Project Team');
  const published_date_raw = get('Published Date');
  let download_link = get('download_link');
  if (download_link === '#N/A' || !download_link) download_link = '';

  if (!title) continue;

  publications.push({
    id,
    category,
    url,
    title,
    project_team,
    published_date: parseDate(published_date_raw),
    download_link,
  });
  id += 1;
}

const json = JSON.stringify(publications, null, 2);

if (outPath) {
  fs.writeFileSync(outPath, json, 'utf8');
  console.error('Wrote', outPath, 'with', publications.length, 'publications.');
} else {
  console.log(json);
}