import express from 'express';
import dotenv from 'dotenv';
import sequelize from '../config/db';
import authRoutes from './auth'; // Assuming you have an index file in the auth folder
import contactRoutes from './contacts'; // Assuming you have an index file in the contacts folder
import { authenticate } from '../middleware/auth';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

// Route handlers
app.use('/api/auth', authRoutes);
app.use('/api/contacts', authenticate, contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
