const { EntitySchema } = require('typeorm')

const ReviewEntity = new EntitySchema({
  name: "Review",
  tableName: "review",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment",
    },
    reason: {
      type: "text",
    },
    score: {
      type: "int",
    },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "user",
      joinColumn: { name: "user_id" },
    },
  },
});

module.exports = { ReviewEntity }