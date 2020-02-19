const express = require("express");

const router = express.Router();

const db = require("../data/dbConfig");

router.get("/", (req, res) => {
  db("cars").then(car => {
    res.json(car);
  });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCar => res.status(201).json(newCar));
    });
});
module.exports = router;
