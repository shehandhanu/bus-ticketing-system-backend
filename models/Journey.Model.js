const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
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
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
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
    price: {
        type: Number,
        default: 0
    },
    countPassengers: {
        type: Number,
        default: 0
    },
    maxPassengers: {
        type: Number,
        default: 0
    },
    passengers: [
        {
            passengerID: {
                type: mongoose.Schema.ObjectId,
                ref: 'User'
            },
            isPaid: {
                type: Boolean,
                default: false
            },
            checkInTime: {
                type: Date,
                default: Date.now()
            },
            checkOutTime: {
                type: Date,
                default: Date.now()
            }
        }
    ],

})

module.exports = mongoose.model('Journey', journeySchema)