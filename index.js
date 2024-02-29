import express from "express";

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  console.log(req.body);
  res.json({
    name: "Amit",
    address: "585 school road rampura",
  });
});

// Server Creation
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
