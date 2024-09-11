const express = require('express');
const router = express.Router();
const Fare = require('./models/Fare');

// Route за изчисляване на таксата
router.post('/calculate-fare', async (req, res) => {
    try {
        const { distance } = req.body;
        const baseFare = 2.0;
        const farePerKm = 1.0;
        const fare = baseFare + (distance * farePerKm);

        const newFare = new Fare({ distance, fare });
        await newFare.save();

        res.json({ fare });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
