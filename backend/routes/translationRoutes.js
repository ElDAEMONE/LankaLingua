const express = require('express');
const router = express.Router();
const Translation = require('../models/translationModel');

// Create a translation
router.post('/', async (req, res) => {
    try {
        const translation = await Translation.create(req.body);
        res.status(201).json(translation);
    } catch (error) {
        console.error('Error creating translation:', error);
        res.status(500).json({ error: 'Failed to create translation' });
    }
});

// Read all translations
router.get('/', async (req, res) => {
    try {
        const translations = await Translation.find();
        res.status(200).json(translations);
    } catch (error) {
        console.error('Error fetching translations:', error);
        res.status(500).json({ error: 'Failed to fetch translations' });
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
