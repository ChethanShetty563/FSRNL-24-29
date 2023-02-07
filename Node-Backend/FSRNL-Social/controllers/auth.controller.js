const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const signin = async (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email })
    .then((data) => {
      if (!data) {
        return res.status(400).send({ message: 'Email Not Found' });
      }

      let isPasswordValid = bcrypt.compareSync(password, data.password);

      if (!isPasswordValid) {
        return res.status(401).send({ message: 'Invalid Password' });
      }

      let token = jwt.sign({ id: data._id }, config.secertKey);

      res.send({
        user: {
          id: data._id,
          email: data.email,
          name: data.name,
        },
        accessToken: token,
      });
    })
    .catch((e) => {
      res.status(500).send({ message: e.message }, config.secertKey);
    });
};

module.exports = { login };
