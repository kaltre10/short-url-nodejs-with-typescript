"use strict";
const success = (req, res, data, statusCode = 200) => {
    res.status(statusCode).json({
        error: false,
        data
    });
};
const error = (req, res, data, statusCode = 500) => {
    res.status(statusCode).json({
        error: true,
        data
    });
};
module.exports = { success, error };
