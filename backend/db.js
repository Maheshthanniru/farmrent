import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, "data");

const files = {
  equipments: path.join(DATA_DIR, "equipments.json"),
  workers: path.join(DATA_DIR, "workers.json"),
  bookings: path.join(DATA_DIR, "bookings.json"),
};

export async function ensureDataFiles() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  for (const [key, file] of Object.entries(files)) {
    try {
      await fs.access(file);
    } catch {
      // seed with empty array if somehow missing
      await fs.writeFile(file, "[]", "utf8");
      console.log(`⚠️ created missing data file: ${key}.json`);
    }
  }
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw || "[]");
}

export async function writeJson(filePath, data) {
  const tmp = filePath + ".tmp";
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf8");
  await fs.rename(tmp, filePath); // atomic-ish swap
}

export async function getAll(kind) {
  return readJson(files[kind]);
}

export async function addItem(kind, item) {
  const list = await getAll(kind);
  list.push(item);
  await writeJson(files[kind], list);
  return item;
}

export function nextId() {
  return Date.now();
}

export function getFiles() {
  return files;
}
