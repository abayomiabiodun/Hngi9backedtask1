const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;

const profile = {
        'slackUsername': 'abayomiabiodun',
        'Backend': true,
        'age': 24,
        'bio': "I'm a backend engineer enthusiast"
};


app.get("/profile", cors(), (req, res, next) => {
    res.send(profile);
   });

app.listen(port, () => {
    console.log("Ready listening on port 8080")
})