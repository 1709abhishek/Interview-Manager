const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        result: {
            type: String,
            required: true
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'interview'
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



const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
