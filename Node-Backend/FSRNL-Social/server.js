const express = require('express');
const config = require('./config/config');
const userRoutes = require('./routes/user.routes');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/', postRoutes);

mongoose.set('strictQuery', false);
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log('Database Connected');
  })
  .catch((e) => {
    console.log(e);
  });

// app.get('/hello', (req, res) => {
//   res.status(200).send({ message: `Hello ${req.body.name}` });
// });
// app.get('/hello/:user', (req, res) => {
//   console.log(req.params.user);
//   console.log(req.query);
//   res.status(200).send({ message: `Hello ${req.body.name}` });
// });

// app.post('/hello', (req, res) => {
//   res.status(200).send(req.body);
// });

app.listen(config.PORT, () => {
  console.log(`Server is running in ${config.PORT}`);
});
