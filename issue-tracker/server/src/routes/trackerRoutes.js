const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const Track = mongoose.model("Track");

const router = express.Router();

router.use(requireAuth);

router.get("/trackers", async (req, res) => {
  console.log(req);
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

router.post("/trackers", async (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  res.send("success");
  // const { name, locations } = req.body;

  // if (!name || !locations) {
  //   return res
  //     .status(422)
  //     .send({ error: "You must provide a name and locations" });
  // }
  // try {
  //   const track = new Track({ name, locations, userId: req.user._id });
  //   await track.save();
  //   res.send("track");
  // } catch (err) {
  //   res.status(422).send({ error: err.message });
  // }
});

module.exports = router;
