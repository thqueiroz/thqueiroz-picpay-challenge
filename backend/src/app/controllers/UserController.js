import axios from 'axios';

class UserController {
    async index(req, res) {
        const response = await axios.get(
            'http://careers.picpay.com/tests/mobdev/users'
        );
        const users = response.data;
        return res.json(users);
    }
}

export default new UserController();
