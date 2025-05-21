const Feedback = require('../models/Feedback');

// CREATE: Add new feedback
exports.createFeedback = async (req, res) => {
  try {
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL: Get all feedback entries
exports.getAllFeedback = async (req, res) => {
  try {
    const feedbackList = await Feedback.find();
    res.json(feedbackList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE: Get feedback by ID
exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Edit feedback
exports.updateFeedback = async (req, res) => {
  try {
    const updated = await Feedback.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE: Remove feedback
exports.deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: 'Feedback deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
