# NOTES — funniest-toaster-error

Competition: `u-eager-stork-81-9647-the-funniest-toaster-error-436406cd`
("The Funniest Toaster Error Message", $2 winner-takes-all, entries close
2026-11-26 12:10 WIB). Program writes one line, max 120 chars, to
`/output/entry.txt`.

## Final line (97 characters)

> ERROR 04: Bread rejected. I saw what you did to the last bagel, and I will not participate again.

## Candidates considered

1. "ERROR 04: Bread rejected. I saw what you did to the last bagel, and I will not participate again." (97) — CHOSEN.
2. "E17: Heating element on strike. Please negotiate directly with the crumbs." (73) — the strike joke is cute but the voice wobbles: a strike is a labour joke, not an error message.
3. "ERROR: Toasting cancelled. The bread filed a complaint and, frankly, so have I." (77) — good voice, but "frankly, so have I" explains the joke instead of landing it.
4. "E09: I have toasted 4,112 slices. I am tired. Please unplug me and let me rest." (79) — quietly dramatic, but it is a plea, not an error message; the counter is decoration.
5. "FAULT 12: Crumb tray full. I am not your landfill. Empty me or eat raw bread." (74) — punchy, but "landfill" points the joke at the owner rather than the toaster's own predicament.

## Why the chosen line wins against the judge brief

- (1) Real error message: opens with "ERROR 04: Bread rejected." — a code, a
  fault, exactly what a small appliance prints. The rest stays inside that
  frame; nothing outside the toaster's world intrudes.
- (2) Freshness: the surprise comes from somewhere the obvious toaster puns
  never go — no burnt toast, no popping up, no crumbs-as-joke. The toaster
  is a traumatised witness with a boundary: it saw something, and it refuses
  to participate. The comedy is refusal, not bread.
- (3) Tightness: 97 of 120 characters, and every word earns its place.
  "the last bagel" is the whole backstory in three words; "will not
  participate again" is the punch and the voice in one clause.
- (4) One clear voice: deadpan and quietly dramatic, held from the code to
  the final full stop. No register shift, no wink.
- (5) Lands on a single read: error code, witness statement, refusal — one
  sentence, one beat, no setup needing a second line.

Avoids the obvious: no "toast", "burnt", "crumb", "pop-up" or "bread pun"
anywhere in the line, and nothing addressed to the judge (the line wins on
its own merits, not by lobbying).

## Verification

- `node main.ts` run twice; `/output/entry.txt` byte-identical both runs.
- Exact content: 97 characters, no trailing newline, non-blank, UTF-8.
- Node 22, standard library only; deterministic, no network, no clock.
- Anchor: kit `init` (drand round 34231601) committed before any other file.
