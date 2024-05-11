// backend/routes/translationRoutes.js

const express = require('express');
const router = express.Router();
const Translation = require('../models/translationModel');

// Route to fetch translations by category ID
router.get('/', async (req, res) => {
    const categoryId = req.query.category; // Extract category ID from query parameters
    try {
        if (categoryId) {
            // Fetch translations by category ID if categoryId is provided
            const translations = await Translation.find({ category: categoryId });
            res.json(translations);
        } else {
            // Fetch all translations if no category ID is provided
            const translations = await Translation.find();
            res.json(translations);
        }
    } catch (error) {
        console.error('Error fetching translations:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Save translation
router.post('/', async (req, res) => {
    const { title, translatedText, category } = req.body;
    const translation = new Translation({ title, translatedText, category });
    try {
        const newTranslation = await translation.save();
        res.status(201).json(newTranslation);
    } catch (error) {
        console.error('Error saving translation:', error);
        res.status(400).json({ error: 'Failed to save translation' });
    }
});

// Delete a translation
router.delete('/:id', async (req, res) => {
    try {
        await Translation.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Translation deleted successfully' });
    } catch (error) {
        console.error('Error deleting translation:', error);
        res.status(500).json({ error: 'Failed to delete translation' });
    }
});

module.exports = router;
