const express = require("express");
const blogRouter = require("../Controllers/BlogControllers");

const router = express.Router();

router.route("/").post(blogRouter.createBlog).get(blogRouter.getAllBlogs);
router.route("/:id").get(blogRouter.getBlog);

module.exports = router;
