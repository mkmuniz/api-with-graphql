import express from 'express';
import logger from 'morgan';


const app = express();

app.use(express.json());
app.use(logger('dev'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});