const TimeTable = require("../models/TimeTable.Model");

exports.addRoute = async (req, res, next) => {
    const timeTable = await TimeTable.create(req.body);

    if (!timeTable) {
        res.status(201).json({
            success: false,
        });
    }

    res.status(200).json({
        success: true,
        timeTable,
    });
};

//update user profile   => api/v1/user/update
exports.updateRoute = async (req, res, next) => {
    const timeTable = await TimeTable.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        timeTable,
    });
};

//update user profile   => api/v1/user/update
exports.deleteRoute = async (req, res, next) => {
    const timeTable = await TimeTable.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        timeTable,
    });
};

//get current user  => /api/v1/user
exports.getRoutes = async (req, res, next) => {
    const timeTable = await TimeTable.find();

    if (!timeTable) {
        return res.status(401).json({
            success: false,
            message: "No Route Found",
        });
    }

    res.status(200).json({
        success: true,
        timeTable,
    });
};
