import { findAllDisplayOptions, insertDisplayOption, updateDisplayOption } from "../services";

const getAllDisplayOptions = async (_req, res, next) => {
    try {
      const allApis = await findAllDisplayOptions();
  
      console.log("Get all display options was successful");
      res.send(allApis);
    } catch (error) {
      console.error(`Get all display options failed: ${error}`);
      next(error);
    }
  };

const patchDisplayOption = async (req, res, next) => {
    const { body: data } = req;

    try {
      const allApis = await updateDisplayOption(data.id, data);
  
      console.log(`patch display option with id: ${data.id} was successful`);
      res.send(allApis);
    } catch (error) {
      console.error(`patch display option with id: ${data.id} failed: ${error}`);
      next(error);
    }
  };

const postDisplayOption = async (req, res, next) => {
    const { body: data } = req;
    try {
      const allApis = await insertDisplayOption(data);
  
      console.log(`Post display option with id: ${data.id} was successful`);
      res.send(allApis);
    } catch (error) {
      console.error(`Post display option with id: ${data.id} failed: ${error}`);
      next(error);
    }
  };

  export {getAllDisplayOptions, postDisplayOption, patchDisplayOption}