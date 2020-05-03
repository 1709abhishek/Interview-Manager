const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        batch: {
            type: String,
            required: true
        },
        college: {
            type: String,
            required: true
        },
        placed: {
            type: String,
            required: true
        },
        DSA: {
            type: Number,
            required: true
        },
        WEBD: {
            type: Number,
            required: true
        },
        react: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
);



const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
