const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
    title: String,
    translatedText: String,
    createdAt: { type: Date, default: Date.now }
});

const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;
