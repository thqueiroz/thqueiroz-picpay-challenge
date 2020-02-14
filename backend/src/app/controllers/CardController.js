import CreditCard from '../schemas/CreditCard';

class CardController {
  async index(req, res) {
    const { user } = req.body;

    const card = await CreditCard.findAll({user});

    return res.json({card});
    
  }

  async store (req, res) {
    const {card_number, user_card_name, expiry_date, cvv, user} = req.body;

    const card = await CreditCard.create({
      card_number,
      user_card_name,
      expiry_date,
      cvv,
      user_card_name
    });

    return res.json({card_number});
  }
}

export default new CardController();