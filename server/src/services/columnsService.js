import { DisplayOption } from "../models";
import Column from "../models/Column";

const findAllColumns = async () => await Column.findAll({ include: { model: DisplayOption, as: "displayOption", required: false}})

const updateColumn = async (id, data) => (await Column.update(data, { where: { id }, returning: true }))[1];

const insertColumn = async (data) => {
    const [feed, created] = await Column.upsert(data);
    return feed;
}

export { findAllColumns, updateColumn, insertColumn }

