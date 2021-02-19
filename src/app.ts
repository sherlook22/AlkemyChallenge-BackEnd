import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import cors from 'cors';


dotenv.config();

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
//Routes
app.use('/api', indexRoutes);

export default app;