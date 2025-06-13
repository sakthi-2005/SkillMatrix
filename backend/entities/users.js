const { EntitySchema } = require('typeorm')

UserEntity = new EntitySchema({
  name: "user",
  tableName: "user",
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
    role_id:{
      type: Number
    },
    current_position:{
      type: Number,
    },
    manager_id:
    {
      type: Number
    }
  },
  relations: {
    role: {
      type: "many-to-one",
      target: "Role",
      joinColumn: { name: "role_id" },
      eager: true,
    },
    currentPosition: {
      type: "many-to-one",
      target: "position",
      joinColumn: { name: "current_position" },
    },
    manager: {
      type: "many-to-one",
      target: "user",
      joinColumn: { name: "manager_id" },
    },
  },
});

module.exports = { UserEntity };