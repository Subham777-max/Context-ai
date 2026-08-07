import { Router } from "express";
import { createConversation, saveMessage,updateConversationTitle,getConversations,getMessages } from "../controllers/chat.controllers.js";

const router = Router();

/**
 * @route POST /api/chat/conversations
 * @desc Create a new conversation
 * @access Private
 */
router.post("/conversations", createConversation);

/**
 * @route GET /api/chat/conversations
 * @desc Get all conversations for the authenticated user
 * @access Private
 */
router.get("/conversations", getConversations);

/**
 * @route PUT /api/chat/conversations/:conversationId
 * @desc Update the title of a conversation
 * @access Private
 */
router.put("/conversations/:conversationId", updateConversationTitle);

/**
 * @route POST /api/chat/messages
 * @desc Save a new message
 * @access Private
 */
router.post("/messages", saveMessage);

/**
 * @route GET /api/chat/messages/:conversationId
 * @desc Get all messages for a specific conversation
 * @access Private
 */
router.get("/messages/:conversationId", getMessages);

export default router;