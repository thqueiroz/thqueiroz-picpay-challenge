import mongoose from 'mongoose';

const CreditCardSchema = new mongoose.Schema(
    {
        card_number: {
            type: Number,
            required: true,
        },
        user_card_name: {
            type: String,
            required: true,
        },
        expiry_date: {
            type: Date,
            required: true,
        },
        cvv: {
            type: Number,
            required: true,
        },
        user: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('CreditCard', CreditCardSchema);
