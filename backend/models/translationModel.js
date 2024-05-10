const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
    title: String,
    translatedText: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    createdAt: { type: Date, default: Date.now }
});

const Translation = mongoose.model('Translation', translationSchema);

module.exports = Translation;
