const { EntitySchema } = require('typeorm')

const CriteriaEntity = new EntitySchema({
  name: "Criteria",
  tableName: "criteria",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment",
    },
    score: {
      type: "int",
    },
    requiredSkillScore: {
      type: "int",
    },
  },
  relations: {
    position: {
      type: "many-to-one",
      target: "position",
      joinColumn: { name: "position_id" },
    },
    role: {
      type: "many-to-one",
      target: "Role",
      joinColumn: { name: "Role_id" },
    },
    skill: {
      type: "many-to-one",
      target: "Skill",
      joinColumn: { name: "skill_id" },
    },
  },
});

module.exports = { CriteriaEntity }