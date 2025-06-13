const { EntitySchema } = require('typeorm')

const RoleEntity = new EntitySchema({
  name: "Role",
  tableName: "Role",
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

module.exports = { RoleEntity }