const { EntitySchema } = require('typeorm')

const PositionEntity = new EntitySchema({
  name: "position",
  tableName: "position",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment",
    },
    name: {
      type: "char",
      length: 255,
    },
  },
});

module.exports = { PositionEntity }
