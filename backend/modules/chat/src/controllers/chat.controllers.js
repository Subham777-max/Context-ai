import conversationModel from "../models/conversation.model.js";
import messageModel from "../models/message.model.js";

export const createConversation = async (req, res) => {
    try {
        const { title } = req.body;
        const userId = req.headers['x-user-id'];
        const conversation = await conversationModel.create({
            title,
            userId
        });
        res.status(201).json(conversation);
    }catch(error) {
        console.error("Error creating conversation:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getConversations = async (req, res) => {
    try {
        const userId = req.headers['x-user-id'];
        const conversations = await conversationModel.find({ userId }).sort({ updatedAt:-1 });
        res.status(200).json(conversations);
    }catch(error) {
        console.error("Error fetching conversations:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateConversationTitle = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const { title } = req.body;
        const updatedConversation = await conversationModel.findByIdAndUpdate(conversationId, { title }, { returnDocument: "after" });
        if(!updatedConversation) {
            return res.status(404).json({ message: "Conversation not found" });
        }
        res.status(200).json(updatedConversation);
    }catch(error) {
        console.error("Error updating conversation title:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const saveMessage = async (req, res) => {
    try{
        const { conversationId, role, content } = req.body;
        const message = await messageModel.create({
            conversationId,
            role,
            content
        });
        res.status(201).json(message);
    }catch(error) {
        console.error("Error saving message:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getMessages = async (req, res) => {
    try{
        const { conversationId } = req.params;
        const messages = await messageModel.find({ conversationId }).sort({ createdAt: -1 });
        res.status(200).json(messages);
    }catch(error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}