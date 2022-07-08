export const reqLogPrefix = (req) => {
    const { ip, path, method } = req;
  
    return `${path} - ${method} request from IP '${ip}'.'`;
};

export const requestLog = (req, res, next) => {
    console.log(reqLogPrefix(req));
    next();
}