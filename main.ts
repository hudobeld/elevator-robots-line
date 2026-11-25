// Two Robots in an Elevator — one line of robot small talk.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "So... do you ride this lift often, or is your route also just floors 1, 3, 2, 3?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
