const mongoose = require("mongoose");

const timeTableSchema = new mongoose.Schema({
    route: {
        type: String,
        required: [true, 'Please Enter Route'],
        maxLength: [10, 'Route cannot exceed 10 characters']
    },
    vehicalNumber: {
        type: String,
        required: [true, 'Please Enter Vehical Number'],
        maxLength: [10, 'Vehical Number exceed 10 characters']
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    startLocation: {
        type: String,
        required: true
    },
    endLocation: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("TimeTable", timeTableSchema);
