import dotenv from "dotenv";

export const NODE_ENV = process.env.NODE_ENV ?? "development";

const envResult = dotenv.config();
if (envResult.error && NODE_ENV === "development") {
  console.warn(envResult.error.message);
}

export const PORT = process.env.PORT ?? 8080;

export const SQL_CONFIG = Object.freeze({
  username: process.env.dbUsername,
  password: process.env.dbPassword,
  database: process.env.database,
  host: process.env.dbHost,
  dialect: process.env.dialect ?? "mssql",
});