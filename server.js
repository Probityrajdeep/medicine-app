const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-appointment', (req, res) => {
    const appointmentData = req.body;
    console.log('Appointment Data:', appointmentData);

    // Save the data to a file (for simplicity, you can use a database in a real application)
    fs.appendFile('appointments.json', JSON.stringify(appointmentData) + '\n', (err) => {
        if (err) {
            console.error('Error saving appointment data:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Appointment booked successfully!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});