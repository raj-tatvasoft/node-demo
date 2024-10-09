import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
);

export const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error: while db connection", error);
  }
};
