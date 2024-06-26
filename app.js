const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Book Management System!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
