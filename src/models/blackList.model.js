const mongoose = require('mongoose');
const tokenBlacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, 'Token is required'],
        unique: [true, 'Token must be unique']
    },
    blacklistedAt: {
        type: Date,
        default: Date.now,
        immutable: true
    }
},{ timestamps: true })

tokenBlacklistSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600*24*3 }); //3 days

const tokenBlacklistModel = mongoose.model("tokenBlacklist", tokenBlacklistSchema);

module.exports = tokenBlacklistModel;