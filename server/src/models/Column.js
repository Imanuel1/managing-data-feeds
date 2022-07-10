import { DataTypes } from "sequelize";
import ORM from "../ORM";

const TABLE_NAME = "column";

export const Column = ORM.define(
  TABLE_NAME,
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    data_feed_id: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING(200) },
    rule_scope: { type: DataTypes.DATE },
    operator: { type: DataTypes.ENUM(['lower than', ' greater than', 'contains']) },
    value_to_compare: { type: DataTypes.STRING(200) },
    rule_connection: { type: DataTypes.ENUM(['OR', 'AND']) },
  },
  { tableName: TABLE_NAME }
);

export default Column;