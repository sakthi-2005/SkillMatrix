const { EntitySchema } = require('typeorm')

const UserSkillsEntity = new EntitySchema({
  name: "UserSkills",
  tableName: "userSkills",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: "increment",
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
    skill: {
      type: "many-to-one",
      target: "Skill",
      joinColumn: { name: "skill_id" },
    },
  },
});

module.exports = { UserSkillsEntity };