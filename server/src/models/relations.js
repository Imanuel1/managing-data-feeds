import Column from "./Column";
import DisplayOption from "./DisplayOption";

export const setupRelations = () => {
    DisplayOption.hasMany(Column, {
      as: "column",
      sourceKey: "id",
      foreignKey: "data_feed_id",
    });
    Column.belongsTo(DisplayOption, {
      as: "displayOption",
      foreignKey: "data_feed_id",
      targetKey: "id",
    });
}