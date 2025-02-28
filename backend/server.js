import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import wordsRoutes from "./routes/wordsRoutes.js";
import cors from "cors";
import path from "path";
import { server, app } from "./socketHandler/UsersConnection.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../fronted/dist")));

app.use(express.json());
app.use(cors());

app.use("/api/words", wordsRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../fronted/dist", "index.html"));
});

server.listen(PORT, () => {
    console.log(`Server is Running At http://localhost:${PORT}`.green.bold);
});