import Column from "../models/Column";

const findAllColumns = async () => await Column.findAll()

const updateColumn = async (id, data) => (await Column.update(data, { where: { id }, returning: true }))[1];

const insertColumn = async (data) => {
    const [feed, created] = await Column.upsert(data);
    return feed;
}

export { findAllColumns, updateColumn, insertColumn }