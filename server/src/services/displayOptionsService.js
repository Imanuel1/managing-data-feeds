import Column from "../models/Column";
import DisplayOption from "../models/DisplayOption";

const findAllDisplayOptions = async () => await DisplayOption.findAll({ include: { model: Column, as: "column", required: false}})

const updateDisplayOption = async (id, data) => (await DisplayOption.update(data, { where: { id }, returning: true }))[1];

const insertDisplayOption = async (data) => {
    const [feed, created] = await DisplayOption.upsert(data);
    return feed;
}

export { findAllDisplayOptions, updateDisplayOption, insertDisplayOption }