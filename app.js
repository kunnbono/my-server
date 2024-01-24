import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express()
const port = 8080
app.use(cors());

// Routes
app.use(routes);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})