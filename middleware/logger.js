// @desc    Logs your request to the console
const logger = (req, res, next) => {
    console.log(`request type: ${req.method} to ${req.protocol}://${req.get('host')}${req.originalUrl}`);  
    next();  
};

module.exports = logger;