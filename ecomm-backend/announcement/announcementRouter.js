const { announcement } = require("./announcementController");

const router = require("express").Router();

router.get("/", announcement);

module.exports = router;
