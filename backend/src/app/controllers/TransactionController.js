import Transittion from '../schemas/Transaction';

class TransactionController {
    async index(req, res) {
        const {user} = req.body;
        const transittions = Transittion.findAll({user})

        return res.json(transittions);
    }

    async store(req, res) {
        const {destination_user_id, card_number, expiry_date, cvv, value, user} = req.body;

        const transittion = await Transittion.create({
            card_number,
            expiry_date,
            cvv,
            value,
            destination_user_id,
            user
        });

        return res.json({transittion});

    }
}

export default new TransactionController();
