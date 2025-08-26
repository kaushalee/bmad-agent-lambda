
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/start', async (req, res) => {
  try {
    const result = await controller.startAgent(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/query', async (req, res) => {
  try {
    const result = await controller.queryAgent(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/workflow', async (req, res) => {
  try {
    const result = await controller.workflowAgent(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
