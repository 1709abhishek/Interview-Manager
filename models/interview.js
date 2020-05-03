const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student'
        }
    },
    {
        timestamps: true,
    }
);



const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;
