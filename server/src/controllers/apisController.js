import { findAllApis } from '../services/apisService'

const getAllapis = async (_req, res, next) => {
    try {
      const allApis = await findAllApis();
  
      console.log("Get all apis was successful");
      res.send(allApis);
    } catch (error) {
      console.error(`Get all apis failed: ${error}`);
      next(error);
    }
  };

  export {getAllapis}