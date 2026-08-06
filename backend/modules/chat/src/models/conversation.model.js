import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }
},{ timestamps: true });

const conversationModel = mongoose.model("Conversation", conversationSchema);
export default conversationModel;
