const express = require('express');
const app = express();
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

// to accepts json data.
app.use(express.json());
app.use('/api/user', userRoutes);

app.get('/api/chat', (req, res) => {
  res.send(chats);
});

app.listen(process.env.PORT, () => console.log('server started on port 5000'));
