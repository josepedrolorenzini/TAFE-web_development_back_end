import express from "express";
import cors from "cors";
import records from "./routes/records.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", function(req, res) {
    res.json({"status": "OK"});
});


app.use("/record", records);
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
})