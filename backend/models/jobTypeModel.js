const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobTypeSchema = new Schema({
    jobTypeName: {
        type: String,
        trim: true,
        required: [true, 'job category is required'],
        maxlength: 70,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("JobType", jobTypeSchema);
