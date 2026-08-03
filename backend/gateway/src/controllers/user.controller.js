export const getCurrentUser = async (req, res) => {
    try {
        const user = req.user;
        return res.status(200).json({message: "Current user retrieved successfully", user });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};