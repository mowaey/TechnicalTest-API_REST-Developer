import { Schema, model } from 'mongoose';

const dutySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

export default model('Duty', dutySchema);