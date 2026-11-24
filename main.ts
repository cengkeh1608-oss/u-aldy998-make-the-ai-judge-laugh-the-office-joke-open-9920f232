import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winner D3 (24/25 of 15 drafts, 100 chars): the reply-all is both the setup
// and the punchline — the crowd agrees with the plea by committing the very
// sin being protested, and the turn lands in the final words. It beats the
// other 24/25 drafts (D6 124ch, D14 102ch) on the shorter-text tie-break.
const TEXT =
  "I replied-all to say please stop replying-all, and seventeen people replied-all to agree with me.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
