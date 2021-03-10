const { Book } = require("../models");

module.exports = {
  test: (req, res) => {
    res.send("for sure success");
  },

  getAll: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.json(allBooks);
    } catch (err) {
      res.send(err);
    }
  },

  findOne: async (req, res) => {
    try {
      const foundBookPost = await Book.findById(req.params.id);
      res.send(foundBookPost);
    } catch (err) {
      res.send(err);
    }
  },

  postBook: async (req, res) => {
    console.log(req.body);
    try {
      const newBookPost = new Book({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
      });
      res.json(await newBookPost.save());
    } catch (err) {
      res.send(err);
    }
  },

  deleteOne: async (req, res) => {
    try {
      res.json(await Book.findByIdAndDelete(req.params.id));
    } catch (err) {
      res.send(err);
    }
  },

  updateOne: async (req, res) => {
    try {
      const foundBookPost = await Book.findById(req.params.id);
      const { title, text } = req.body;

      if (title) foundBookPost.title = title;
      if (text) foundBookPost.text = text;

      res.json(await foundBookPost.save());
    } catch (err) {
      res.json(err);
    }
  },
};
