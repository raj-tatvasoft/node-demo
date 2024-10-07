import express from "express";
import { userController } from "./userController.js";

const router = express.Router();

router.route("/").get(userController.getAll).put(userController.update);
router
  .route("/:id")
  .get(userController.getById)
  .delete(userController.deleteById);

export default router;
