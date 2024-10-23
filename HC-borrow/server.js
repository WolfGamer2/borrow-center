const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const airtableController = require('./controllers/airtableController');
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Routes
app.use('/auth', authRoutes);

// Main page (requires login)
app.get('/', airtableController.requireLogin, (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
