import { Router } from "express";
import { registerValidation, loginValidation, handleValidationErrors } from "../validations/auth.validation.js";
import { register, login } from "../controllers/auth.controllers.js";

const router = Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
router.post("/register", registerValidation, handleValidationErrors, register);

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
router.post("/login", loginValidation, handleValidationErrors, login);

export default router;