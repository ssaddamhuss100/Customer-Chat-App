import dotenv from 'dotenv';
dotenv.config();
import { connectToDatabase } from "./db.config.js";
import {app} from './index.js'

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connectToDatabase();
});