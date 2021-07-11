import mongoose from 'mongoose';
import config from './config/index';

export async function connect() {
    try {
        mongoose.set('useFindAndModify', false);
        await mongoose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('>>> DB is connected');
    } catch (error) {
        console.log('Something goes wrong!', error);
    }
}