const { EntitySchema } = require('typeorm')

const ResourceEntity = new EntitySchema({
  name: "resource",
  tableName: "resource",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment",
    },
    resourceLink: {
      type: "text",
    },
  },
});

module.exports = { ResourceEntity }