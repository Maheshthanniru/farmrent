import express from "express";
import cors from "cors";
import { ensureDataFiles, getAll, addItem, nextId, writeJson, getFiles } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Ensure data dir/files exist
await ensureDataFiles();

// --- Health ---
app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "farmrent-backend", storage: "json-files" });
});

// --- Equipments ---
app.get("/equipments", async (_req, res) => {
  const list = await getAll("equipments");
  res.json(list);
});

app.post("/equipments", async (req, res) => {
  const { name, available = true } = req.body || {};
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: "name (string) is required" });
  }
  const item = { id: nextId(), name, available: !!available };
  await addItem("equipments", item);
  res.status(201).json(item);
});

// --- Workers ---
app.get("/workers", async (_req, res) => {
  const list = await getAll("workers");
  res.json(list);
});

app.post("/workers", async (req, res) => {
  const { name, skill, available = true } = req.body || {};
  if (!name || !skill) {
    return res.status(400).json({ error: "name and skill are required" });
  }
  const worker = { id: nextId(), name, skill, available: !!available };
  await addItem("workers", worker);
  res.status(201).json(worker);
});

// --- Bookings ---
app.get("/bookings", async (_req, res) => {
  const list = await getAll("bookings");
  res.json(list);
});

app.post("/bookings", async (req, res) => {
  const { kind, itemId, startDate, endDate, farmerUsername } = req.body || {};
  if (!kind || !itemId || !startDate || !endDate || !farmerUsername) {
    return res.status(400).json({ error: "kind, itemId, startDate, endDate, and farmerUsername are required" });
  }
  
  // Get the item name
  const items = await getAll(kind === "equipment" ? "equipments" : "workers");
  const item = items.find(i => i.id === itemId);
  if (!item) {
    return res.status(400).json({ error: "Item not found" });
  }
  
  const booking = { 
    id: nextId(), 
    kind, 
    itemId, 
    itemName: item.name, 
    startDate, 
    endDate, 
    farmerUsername, 
    status: "active" 
  };
  await addItem("bookings", booking);
  res.status(201).json(booking);
});

app.patch("/bookings/:id/cancel", async (req, res) => {
  const { id } = req.params;
  const list = await getAll("bookings");
  const booking = list.find(b => b.id === parseInt(id));
  if (!booking) {
    return res.status(404).json({ error: "Booking not found" });
  }
  booking.status = "canceled";
  const files = getFiles();
  await writeJson(files.bookings, list);
  res.json(booking);
});

// --- Start ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ FarmRent API (file-backed) on http://localhost:${PORT}`);
});
