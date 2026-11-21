import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The keeper trims the wick, sets the lens turning, and the light goes on its slow round over the water. Out past the dark, a boat steadies its course by it. Nothing hurries. The lamp has done this every night, and it will do it again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
