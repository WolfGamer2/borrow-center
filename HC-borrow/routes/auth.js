const express = require('express');
const router = express.Router();
const axios = require('axios');
const airtableController = require('../controllers/airtableController');

router.get('/slack', (req, res) => {
    const slackOAuthUrl = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=identity.basic,identity.email&redirect_uri=${process.env.SLACK_REDIRECT_URI}`;
    res.redirect(slackOAuthUrl);
});

router.get('/slack/callback', async (req, res) => {
    const code = req.query.code;
    const tokenResponse = await axios.post('https://slack.com/api/oauth.v2.access', {
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        code,
        redirect_uri: process.env.SLACK_REDIRECT_URI
    });

    const userResponse = await axios.get(`https://slack.com/api/users.identity?token=${tokenResponse.data.access_token}`);
    const user = userResponse.data.user;

    // Save user info to session
    req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email
    };

    // Check or create user in Airtable
    await airtableController.checkOrCreateUser(user);

    res.redirect('/');
});

module.exports = router;
