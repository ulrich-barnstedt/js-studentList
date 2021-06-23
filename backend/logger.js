module.exports = (req, res, next) => {
    console.log(
        `[${(new Date()).toTimeString().split(" ")[0]}] [${req.method}] ${req.ip} -> ${req.headers.host}${req.originalUrl} ${JSON.stringify(req.body)}`
    );

    next();
}