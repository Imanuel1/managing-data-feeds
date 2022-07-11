import { findAllColumns, insertColumn, updateColumn } from "../services";

const getAllColumns = async (_req, res, next) => {
    try {
      const allApis = await findAllColumns();
  
      console.log("Get all Column was successful");
      res.send(allApis);
    } catch (error) {
      console.error(`Get all Column failed: ${error}`);
      next(error);
    }
  };

const patchColumn = async (req, res, next) => {
    const { body: data } = req;

    try {
      const allApis = await updateColumn(data.id, data);
  
      console.log(`patch Column with id: ${data.id} was successful`);
      res.send(allApis);
    } catch (error) {
      console.error(`patch Column with id: ${data.id} failed: ${error}`);
      next(error);
    }
  };

const postColumn = async (req, res, next) => {
    const { body: data } = req;
    try {
      const allApis = await insertColumn(data);
  
      console.log(`Post Column with id: ${data.id} was successful`);
      res.send(allApis);
    } catch (error) {
      console.error(`Post Column with id: ${data.id} failed: ${error}`);
      next(error);
    }
  };

  export {getAllColumns, postColumn, patchColumn}