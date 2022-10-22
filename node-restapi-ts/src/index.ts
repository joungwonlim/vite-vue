import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

dotenv.config();
console.log(process.env.DB_URL);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: unknown) => {
    console.log(
      'Error connecting to MongoDB',
    );
    console.log(error);
  });

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello index.ts',
  });
});

const port = process.env.PORT || 1022;
app.listen(port, () => {
  console.log(`Listin server ${port}`);
});
