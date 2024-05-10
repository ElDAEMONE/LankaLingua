const express = require('express');
const router = express.Router();
const Translation = require('../models/translationModel');

// Get translations by category
router.get('/:category', async (req, res) => {
    const { category } = req.params;
    try {
        const translations = await Translation.find({ category }).exec();
        res.json(translations);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
        res.status(400).json({ message: error.message });
    }
});

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


/////////////////////////////////////








// const express = require('express');
// const router = express.Router();
// const Translation = require('../models/translationModel');
// const { Storage } = require('@google-cloud/storage');
// const vision = require('@google-cloud/vision');

// // Initialize Google Cloud Storage and Vision API clients
// const storage = new Storage();
// const client = new vision.ImageAnnotatorClient();

// // Create a translation
// router.post('/', async (req, res) => {
//     // Your existing translation creation logic...
// });

// // Read all translations
// router.get('/', async (req, res) => {
//     // Your existing translation fetching logic...
// });

// // Delete a translation
// router.delete('/:id', async (req, res) => {
//     // Your existing translation deletion logic...
// });

// // Image upload endpoint
// router.post('/upload-image', async (req, res) => {
//     try {
//         // Assuming image file is sent as 'file' field in the request
//         const imageFile = req.files.file;
        
//         // Upload image to Google Cloud Storage or save it to a temporary location
//         // Example: Upload to Google Cloud Storage
//         const bucketName = 'your-bucket-name';
//         const fileName = `${Date.now()}_${imageFile.name}`;
//         await storage.bucket(bucketName).upload(imageFile.tempFilePath, {
//             destination: fileName,
//         });

//         const imageUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
//         res.status(200).json({ imageUrl });
//     } catch (error) {
//         console.error('Error uploading image:', error);
//         res.status(500).json({ error: 'Failed to upload image' });
//     }
// });

// // OCR endpoint
// router.post('/perform-ocr', async (req, res) => {
//     try {
//         const imageUrl = req.body.imageUrl;

//         // Perform OCR on the uploaded image using the Cloud Vision API
//         const [result] = await client.textDetection(imageUrl);
//         const extractedText = result.textAnnotations[0].description;

//         res.status(200).json({ extractedText });
//     } catch (error) {
//         console.error('Error performing OCR:', error);
//         res.status(500).json({ error: 'Failed to perform OCR' });
//     }
// });

// module.exports = router;
