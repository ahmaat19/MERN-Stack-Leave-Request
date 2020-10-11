const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routers/api/users'));
app.use('/api/auth', require('./routers/api/auth'));
app.use('/api/department', require('./routers/api/department'));
app.use('/api/employee', require('./routers/api/employee'));
app.use('/api/leave', require('./routers/api/leave'));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
