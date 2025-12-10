const express = require("express");
const router = express.Router();
const task = require("../controllers/taskController");
const auth = require("../middlewares/authMiddleware");

// Protect all task routes
router.use(auth);

router.get("/", task.list);
router.post("/", task.create);
router.patch("/:id/toggle", task.toggle);
router.delete("/:id", task.remove);

module.exports = router;
