import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { setupSwagger } from '../config/swagger'; // ✅ Correct import

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Swagger setup
setupSwagger(app);

// Root route
app.get('/', (req, res) => {
  res.send('School API is running');
});

export default app;
