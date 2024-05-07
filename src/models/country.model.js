import mongoose from 'mongoose';

const countrySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    code: {
        type: String,
    },
});

export default mongoose.model('Country', countrySchema);
