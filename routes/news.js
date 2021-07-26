const express = require("express"),
  User = require("../models/user"),
  News = require("../models/news"),
  router = express.Router(),
  auth = require("../auths/auth");

/* 003 - start */

router.post("/", auth, (req, res) => {
  try {
    let news = { ...req.body, category: req.body.category.toLowerCase() };
    const newNews = new News(news);
    newNews.save((err, result) => {
      if (!err) {
        res.json({ status: "amjilttai", result });
      } else {
        res.json({ status: 0, result: "failed 3-2" });
      }
    });
  } catch (error) {
    res.json({ status: 0, result: "failed 3-1" });
  }
});

/* 003 - end */

module.exports = router;
