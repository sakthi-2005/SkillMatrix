const { EntitySchema } = require('typeorm')

const SkillEntity = new EntitySchema({
  name: "Skill",
  tableName: "skills",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment",
    },
  },
  relations: {
    resource: {
      type: "many-to-one",
      target: "resource",
      joinColumn: { name: "resource_id" },
    },
  },
});

module.exports = { SkillEntity }