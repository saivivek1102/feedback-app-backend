const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// POST /api/feedback → Create new feedback
router.post('/', feedbackController.createFeedback);

// GET /api/feedback → Get all feedback
router.get('/', feedbackController.getAllFeedback);

// GET /api/feedback/:id → Get a single feedback by ID
router.get('/:id', feedbackController.getFeedbackById);

// PUT /api/feedback/:id → Update feedback
router.put('/:id', feedbackController.updateFeedback);

// DELETE /api/feedback/:id → Delete feedback
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
