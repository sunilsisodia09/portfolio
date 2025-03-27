const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User');
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json()); 


mongoose.connect('mongodb://localhost:27017/users')
  .then(() => console.log(' MongoDB connected'))
  .catch(err => console.error(' MongoDB connection error:', err));


app.get('/', (req, res) => {
    res.send(' Server is running and MongoDB is connected!');
});


app.post('/submit', async (req, res) => {
    const { name, email, message, number } = req.body;
    try {
        const newUser = new User({ name, email, message, number });
        await newUser.save();
        console.log(' Data saved:', newUser);
        res.json({ message: ' Data saved successfully!' });
    } catch (error) {
        console.error(' Error saving data:', error);
        res.status(500).json({ error: ' Error saving data.' });
    }
});


app.use((req, res) => {
    res.status(404).send(' Route not found');
});


app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});
