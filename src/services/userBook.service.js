const { User, Book } = require('../db/models');

const getUsersBooksById = (id) => User.findOne({
  where: { id },
  include: [{ model: Book, as: 'books', through: { attributes: [] } }],
});

module.exports = {
  getUsersBooksById,
};