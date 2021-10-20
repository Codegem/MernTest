import express from "express";

import * as controllerItem from "../controllers/posts.js";

const router = express.Router();

router.get("/", controllerItem.getPosts);
router.post("/", controllerItem.createPost);
router.patch("/:id", controllerItem.updatePost);
router.delete("/:id", controllerItem.deletePost);
router.patch("/:id/likePost", controllerItem.likePost);

export default router;
