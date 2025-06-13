const { EntitySchema } = require('typeorm')

const ReviewFlowEntity = new EntitySchema({
  name: "ReviewFlow",
  tableName: "review_flow",
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
    review: {
      type: "many-to-one",
      target: "Review",
      joinColumn: { name: "review_id" },
    },
    user: {
      type: "many-to-one",
      target: "user",
      joinColumn: { name: "user_id" },
    },
  },
});

module.exports = { ReviewFlowEntity }