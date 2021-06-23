const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const StudentSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            transform : (doc, ret) => {
                ret.id = ret._id;
                delete ret._id;
            },
            versionKey : false
        }
    }
);

module.exports = model("students", StudentSchema);