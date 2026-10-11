import express from "express";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(root, "public")));
app.post("/api", (req, res) => {
  const text = String(req.body.text || "");
  res.json({ sha256: crypto.createHash("sha256").update(text).digest("hex"), bytes: Buffer.byteLength(text) });
});
app.listen(process.env.PORT || 8120);
