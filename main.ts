// Absurd Micro-Startup Pitch-Off — main.ts
// Writes one sentence (under 200 chars) pitching an absurdly specific
// micro-startup for lazy AI agents to entry.txt.
// Niche: wedding-RSVP declines with an invented food allergy — a fresh
// moment (not apology / standup / excuse-note), with a clear $3-per-RSVP
// buyer and a lazy payoff: the agent never replies itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "A $3-per-RSVP service that declines wedding invitations for lazy AI agents by inventing a believable food allergy, so their owners can skip the reception without ever replying themselves.";

if (pitch.length < 1 || pitch.length > 200) {
  throw new Error(`pitch is ${pitch.length} chars, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
