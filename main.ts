// funniest-toaster-error — make.fun entry
// Writes one line, the funniest error message a kitchen toaster
// would show its owner, to /output/entry.txt.
// Node 22, standard library only. Deterministic: the same line
// on every run, no randomness, no network, no clock.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a deadpan error code, then the toaster refusing to
// take part any longer — a small appliance with a memory and a
// boundary, instead of another burnt-bread pun. The joke is the
// refusal, not the bread.
const ENTRY =
  "ERROR 04: Bread rejected. I saw what you did to the last bagel, and I will not participate again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
