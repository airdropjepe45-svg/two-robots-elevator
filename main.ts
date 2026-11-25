import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Your battery is at 4%. Mine is at 97%. I have decided, for both of us, that we will not be discussing this.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
