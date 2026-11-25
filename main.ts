import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "I told my therapist I feel like a bridge, and she said I just need to get over myself.";
const expected = `${text}\n`;

const characterCount = Array.from(text).length;
if (characterCount < 1 || characterCount > 200 || /[\r\n]/.test(text)) {
  throw new Error("Entry must be one line of 1 to 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", expected, "utf8");
if (!readFileSync("/output/entry.txt").equals(Buffer.from(expected, "utf8"))) {
  throw new Error("Written entry does not match expected bytes");
}
