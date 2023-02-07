const PostModel = require('../models/post.model');
const formidable = require('formidable');
const fs = require('fs');

const createPost = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).send({ message: 'Image can;t be uploaded' });
    }

    let post = new PostModel(fields);
    post.postedBy = req.user;
    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.filepath);
      post.photo.contentType = files.photo.type;
    }
    post
      .save()
      .then((data) => {
        if (!data) {
          return res.send({ message: 'Could not upload the image' });
        }

        res.send(data);
      })
      .catch((e) => {
        res.send({ message: e.message });
      });
  });
};

module.exports = { createPost };
