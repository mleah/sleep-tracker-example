const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

// Test route
app.get('/test', (req, res) => {

    // Will output in the terminal as a secondary check that the endpoint is called
    console.log("I was called!");
    res.json({message: "Connected to server!"});
});