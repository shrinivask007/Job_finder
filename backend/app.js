const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes')
const jobTypeRoutes  = require('./routes/jobTypeRoutes')
const jobRoutes  = require('./routes/jobRoutes')


// Check if environment variables are loaded
if (!process.env.DATABASE || !process.env.PORT) {
    console.error("Error: Environment variables not set.");
    process.exit(1);
}

// Database connection
mongoose.connect(process.env.DATABASE || "mongodb+srv://user:user@jobportal.geagwjb.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(cookieParser());
app.use(cors());


// Routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api',jobTypeRoutes)
app.use('/api',jobRoutes)

// Error middleware
app.use(errorHandler);

// Start server
const port = process.env.PORT || 9000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

/* Dotenv file 
PORT = 9000 
DATABASE = "mongodb+srv://user:user@jobportal.geagwjb.mongodb.net/"
JWT_SECRET=dcewriunc837nn83nbcv
*/