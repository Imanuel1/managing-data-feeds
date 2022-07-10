import DisplayOption from "../models/DisplayOption";

const findAllDisplayOptions = async () => await DisplayOption.findAll()

const updateDisplayOption = async (id, data) => (await DisplayOption.update(data, { where: { id }, returning: true }))[1];

const insertDisplayOption = async (data) => {
    const [feed, created] = await DisplayOption.upsert(data);
    return feed;
}

export { findAllDisplayOptions, updateDisplayOption, insertDisplayOption }