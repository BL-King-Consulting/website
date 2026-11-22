// Checks for blog posts. Run with: node --test _tests/
// Written for website PR 16 review findings r4657969510 (future-dated post) and
// r4657969520 (factual statements without a source).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const POSTS = new URL('../_posts/', import.meta.url);

function frontMatterDate(src) {
  const m = src.match(/^---\n[\s\S]*?^date:\s*'?([^'\n]+)'?\s*$/m);
  return m ? m[1].trim() : null;
}

// GitHub Pages builds in UTC when _config.yml sets no timezone. A post dated after the
// build time is skipped, so no post may be dated after the moment the tests run.
test('no post is dated in the future (GitHub Pages would skip it)', () => {
  const now = Date.now();
  for (const name of fs.readdirSync(POSTS).filter(n => n.endsWith('.md'))) {
    const src = fs.readFileSync(new URL(name, POSTS), 'utf8');
    const raw = frontMatterDate(src) || name.slice(0, 10);
    const iso = /[+-]\d{4}$|Z$/.test(raw) ? raw.replace(' ', 'T').replace(/ ([+-]\d{2})(\d{2})$/, '$1:$2') : `${raw.replace(' ', 'T')}${raw.length > 10 ? '' : 'T00:00:00'}Z`;
    const t = Date.parse(iso);
    assert.ok(!Number.isNaN(t), `${name}: unreadable date ${raw}`);
    assert.ok(t <= now, `${name}: dated ${raw}, after the build time; GitHub Pages will not publish it`);
  }
});

// In the factual sections of the DFARS post, every paragraph and list item must link a
// source. Headings, the table, and lines on this allow-list are not factual claims.
const NOT_CLAIMS = new Set([
  'All numbers are DFARS clauses unless marked FAR.',
  'In practice:',
]);

function factualBlocks(body) {
  const facts = body.split(/^## What to Check/m)[0];
  return facts
    .split(/\n\s*\n/)
    .flatMap(b => (/^\s*- /m.test(b) ? b.split(/\n(?=\s*- )/) : [b]))
    .map(b => b.trim())
    .filter(b => b && !b.startsWith('#') && !b.startsWith('|') && !NOT_CLAIMS.has(b));
}

test('every factual paragraph and list item in the DFARS post links a source', () => {
  const src = fs.readFileSync(new URL('2026-11-22-dfars-252-204-7020-now-252-240-7997.md', POSTS), 'utf8');
  const body = src.split(/^---\s*$/m).slice(2).join('---');
  const blocks = factualBlocks(body);
  assert.ok(blocks.length >= 10, `found ${blocks.length} blocks`);
  const unsourced = blocks.filter(b => !/\]\(https?:\/\//.test(b));
  assert.deepEqual(unsourced, [], 'blocks with no source link');
});
