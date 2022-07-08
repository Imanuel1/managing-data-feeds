import column from "./Column";
import displayOption from "./DisplayOption";

export const setupRelations = () => {
    displayOption.hasMany(column, {
      as: "column",
      sourceKey: "id",
      foreignKey: "apiId",
    });
    column.belongsTo(displayOption, {
      as: "api",
      foreignKey: "apiId",
      targetKey: "id",
    });
}