const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB Connected..'))
    .catch(err => console.log('error occured..'))

app.get('/', (req, res) => res.send('Hello Reviews App!'));

app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));