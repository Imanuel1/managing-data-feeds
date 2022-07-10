import { SQL_CONFIG } from './environment';
import { Sequelize } from "sequelize";

const ORM = new Sequelize(
  SQL_CONFIG.database,
  SQL_CONFIG.username,
  SQL_CONFIG.password,
  {
    host: SQL_CONFIG.host,
    dialect: SQL_CONFIG.dialect,
    logging: (msg) => console.log(msg),
    define: {
      paranoid: false, // for possible future use. Note: can create problem to onDelete option
    },
  }
);

export const testDBConnection = async () => {
  try {
    await ORM.authenticate();
    console.log("Connection has been established successfully.");

    await ORM.sync();
    console.warn("DB is synced!");
  } catch (error) {
    console.error(error);
  }
};

export default ORM;
