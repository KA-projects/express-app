import { Router } from "express";
import { getState, publishDocument } from "../controllers/document.controller";

const router = Router();

router.get('/state', getState);
router.post('/publish', publishDocument);

export default router;