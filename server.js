import express from "express";
import dotenv from "dotenv";
import path from "path";

// Hansi mühitdə işlədiyini müəyyənləşdir:
const env = process.env.NODE_ENV || "development";

// Doğru .env faylını yüklə
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port} (${process.env.NODE_ENV})`);
});
