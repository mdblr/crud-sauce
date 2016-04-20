var knex = require('../db/knex');

module.exports = {
  addReview: function (user_id, place_id, comment, rating) {
    return knex('reviews').insert({
      user_id: user_id,
      place_id: place_id,
      comment: comment,
      rating: rating,
    });
  },
};
