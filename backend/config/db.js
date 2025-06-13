require("dotenv").config();
const { DataSource } = require("typeorm");
const { UserEntity }  = require('../entities/users');
const { UserSkillsEntity } = require('../entities/userSkills');
const { PositionEntity } = require('../entities/positions');
const { ReviewEntity } = require('../entities/reviews');
const { ReviewFlowEntity } = require('../entities/reviewFlow');
const { ResourceEntity } = require('../entities/reources');
const { RoleEntity } = require('../entities/roles');
const { SkillEntity } = require('../entities/skills');
const { CriteriaEntity } = require('../entities/criteria');


const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    UserEntity,
    UserSkillsEntity,
    PositionEntity,
    SkillEntity,
    ReviewEntity,
    ReviewFlowEntity,
    ResourceEntity,
    RoleEntity,
    CriteriaEntity
  ],
  migrations: ["src/migrations/**/*.ts"],
});


const initializeDatabase = async () => {
  try {
    if (AppDataSource.isInitialized) {
      console.log("Database connection already initialized");
      return;
    }
    await AppDataSource.initialize();
    console.log("Database connection successfully established");
  } catch (error) {
    console.error("Error during database initialization:", error);
    process.exit(1);
  }
};

const UserRepo = AppDataSource.getRepository(UserEntity);
const UserSkillsRepo = AppDataSource.getRepository(UserSkillsEntity);
const ReviewRepo = AppDataSource.getRepository(ReviewEntity);
const ReviewFlowRepo = AppDataSource.getRepository(ReviewFlowEntity);
const SkillRepo = AppDataSource.getRepository(SkillEntity);
const PositionRepo = AppDataSource.getRepository(PositionEntity);
const CriteriaRepo = AppDataSource.getRepository(CriteriaEntity);
const RoleRepo= AppDataSource.getRepository(RoleEntity);
const ResourceRepo = AppDataSource.getRepository(ResourceEntity);

module.exports = {
  initializeDatabase,
  UserRepo,
  UserSkillsRepo,
  ReviewRepo,
  ReviewFlowRepo,
  SkillRepo,
  PositionRepo,
  CriteriaRepo,
  RoleRepo,
  ResourceRepo
};
