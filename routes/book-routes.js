const router = require("express").Router();
const {
  test,
  getAll,
  postBook,
  findOne,
  deleteOne,
  updateOne,
} = require("../controllers/bookControllers");

router.route("/").get(getAll).post(postBook);

router.route("/:id").get(findOne).delete(deleteOne).patch(updateOne);

module.exports = router;
