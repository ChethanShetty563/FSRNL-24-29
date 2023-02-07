const jwt = require('jsonwebtoken');
const config = require('../config/config');
const UserModel = require('../models/user.model');

const verfyToken = (req, res, next) => {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    jwt.verify(req.headers.authorization.split(' ')[1], config.secertKey, (err, decode) => {
      if (err) {
        return res.status(403).send({ message: 'Invaliad JWT token' });
      }

      UserModel.findById(decode.id)
        .then((data) => {
          req.user = data;
          next();
        })
        .catch((e) => {
          res.status(500).send({ message: e.message });
        });
    });
  } else {
    return res.status(403).send({ message: 'Invalid Token or Please login' });
  }
};

module.exports = { verfyToken };
