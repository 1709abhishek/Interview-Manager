const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        result: {
            type: String,
            required: true
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Interview'
        },
        students: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
        }
    },
    {
        timestamps: true,
    }
);



const Result = mongoose.model("Result", resultSchema);

module.exports = Result;
