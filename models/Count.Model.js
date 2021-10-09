const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    inspectionCount: {
        type: Number,
        default: 0
    },
    totalEarning: {
        type: Number,
        default: 0
    },
    monthEarning: {
        January: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        February: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        March: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        April: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        May: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        June: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        July: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        August: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        September: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        October: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        November: {
            Earning: {
                type: Number,
                default: 0,
            }
        },
        December: {
            Earning: {
                type: Number,
                default: 0,
            }
        }
    },
})

module.exports = mongoose.model('Count', countSchema)