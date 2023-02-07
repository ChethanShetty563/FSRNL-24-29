const users = require('../data/users');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { name, email, password, about } = req.body;
  const user = new UserModel({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    about,
  });
  user
    .save()
    .then((data) => {
      if (!data) {
        res.status(400).send('User not created');
      }

      res.status(200).send({ message: 'User Registrered Successfully' });
    })
    .catch((e) => {
      res.send({ message: e.message || 'Some Error Occured' });
    });
};

const getAllUsers = (req, res) => {
  UserModel.find()
    .select('name email updated created')
    .then((data) => {
      if (!data) {
        res.status(400).send('No Users');
      }
      res.send(data);
    })
    .catch((e) => {
      res.send({ message: e.message || 'Some Error Occured' });
    });
};

const getUserByID = (req, res) => {
  const id = req.params.userid;
  UserModel.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'User not found' });
      }

      res.send(data);
    })
    .catch((e) => {
      res.send({ message: e.message });
    });
};

const updateUser = (req, res) => {
  const id = req.params.userid;
  UserModel.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'User not found' });
      }

      res.send({ message: 'User Updated' });
    })
    .catch((e) => {
      res.send({ message: e.message });
    });
};

const deleteUser = (req, res) => {
  console.log('Database');
  const id = req.params.userid;
  UserModel.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'User not found' });
      }

      res.send({ message: 'User Deleted' });
    })
    .catch((e) => {
      res.send({ message: e.message });
    });
};

const addFollowing = async (req, res, next) => {
  UserModel.findByIdAndUpdate(req.body.userId, { $push: { folowing: req.body.followId } })
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'User not found' });
      }
      next();
    })
    .catch((e) => {
      res.send({ message: e.message || 'Could not retrieve the user' });
    });
};

const addFollower = async (req, res) => {
  UserModel.findByIdAndUpdate(req.body.followId, { $push: { followers: req.body.userId } }, { new: true })
    .populate('following', 'name')
    .populate('followers', 'name')
    .exec()
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.status(200).send(data);
    })
    .catch((e) => {
      res.send({ message: e.message || 'Could not retrieve the user' });
    });
};

module.exports = { createUser, getAllUsers, getUserByID, updateUser, deleteUser, addFollowing, addFollower };
