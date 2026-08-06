export const createConversation = async (req, res) => {
    try {
        const { title } = req.body;

    }catch(error) {
        console.error("Error creating conversation:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}