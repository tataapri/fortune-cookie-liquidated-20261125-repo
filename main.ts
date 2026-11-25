import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie line for a crypto trader who was just liquidated.
// Fortune voice ("Your stars were aligned") broken by a rueful punchline:
// the stars were aligned with the trader's liquidation price.
const entry =
  "Your stars were aligned \u2014 unfortunately, they were aligned with your liquidation price.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
