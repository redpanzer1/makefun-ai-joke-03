// ai-joke-03 entry (Node 22, stdlib only): writes one fixed one-liner about
// AI coding agents to /output/entry.txt. Deterministic: same bytes every
// run, no network. Outside the grader, MAKEFUN_OUTPUT_DIR stands in for
// /output: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One line, no trailing newline: the judge reads exactly these bytes.
const JOKE =
  "The scariest words in programming aren't 'rm -rf' anymore — they're 'Sure! I've updated the code.'";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
