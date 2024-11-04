import { readFileSync } from "node:fs";
import { join } from "node:path";


export default function readFileTasks() {
  try {
    const path = join("tasks.json");
    const dataTask = readFileSync(path, "utf-8");
    if (!dataTask) {
      return [];
    }
    return JSON.parse(dataTask);
  } catch (e) {
    console.error(e);
  }
}
