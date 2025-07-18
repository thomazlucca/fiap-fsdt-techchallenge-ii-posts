import { Router } from "express";
import * as controller from "../controllers/postController.js";

const router = Router();

router.get("/", controller.getAll);
router.get("/search", controller.search);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
