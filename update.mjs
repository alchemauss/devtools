import { readFileSync, writeFileSync } from 'fs';

const { version } = JSON.parse(readFileSync('package.json', 'utf-8'));
const original = readFileSync('CHANGELOG.md', 'utf-8');
writeFileSync('CHANGELOG.md', original.replace(/Unreleased/, version));
