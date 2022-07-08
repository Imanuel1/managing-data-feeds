import { DataTypes } from "sequelize";
import ORM from "@ORM";

const TABLE_NAME = "displayOption";

export const displayOption = ORM.define(
  TABLE_NAME,
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.STRING(30), allowNull: false },
    url: { type: DataTypes.STRING(200), allowNull: false },
    refresh: { type: DataTypes.INTEGER },
  },
  { tableName: TABLE_NAME }
);

export default displayOption;