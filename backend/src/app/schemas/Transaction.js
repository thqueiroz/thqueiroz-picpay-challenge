import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
    {
        card_number: {
            type: Number,
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
        value: {
            type: Number,
            required: true,
        },
        destination_user_id: {
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

export default mongoose.model('Transaction', TransactionSchema);
