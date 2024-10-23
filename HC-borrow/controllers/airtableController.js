const Airtable = require('airtable');
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

// Middleware to check if a user is logged in
exports.requireLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/auth/slack');
    }
    next();
};

// Function to check if a user exists or create them in Airtable
exports.checkOrCreateUser = async (user) => {
    const usersTable = base('Users');

    const records = await usersTable.select({
        filterByFormula: `{Slack ID} = '${user.id}'`
    }).firstPage();

    if (records.length === 0) {
        // Create user if they don't exist
        await usersTable.create({
            'Slack ID': user.id,
            'Name': user.name,
            'Email': user.email,
            'Trust Points': 0
        });
    }
};

// Fetch products filtered by country
exports.getProductsByCountry = async (country) => {
    const productsTable = base('Products');
    const records = await productsTable.select({
        filterByFormula: `{Country} = '${country}'`
    }).all();

    return records.map(record => record.fields);
};

// Submit a borrow request
exports.submitBorrowRequest = async (userId, itemId) => {
    const borrowRequestsTable = base('BorrowRequests');
    await borrowRequestsTable.create({
        'User ID': userId,
        'Item ID': itemId,
        'Status': 'Pending'
    });
};
