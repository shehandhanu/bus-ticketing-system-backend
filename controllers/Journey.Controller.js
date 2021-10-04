const Journey = require('../models/Journey.Model')
const User = require('../models/User.Model')

//Add Route
exports.addRoute = async (req, res) => {

    const journey = await Journey.create(req.body)

    if (!journey) {
        res.status(201).json({
            success: false
        })
    }

    res.status(200).json({
        success: true,
        journey
    })
}

//Get All Routes
exports.getAllRoutes = async (req, res) => {

    const journey = await Journey.find()

    if (!journey) {
        res.status(201).json({
            success: false
        })
    }

    res.status(200).json({
        success: true,
        journey
    })

}

//update route 
exports.updateRoute = async (req, res) => {

    const journey = await Journey.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        journey
    })

}

//update delete
exports.deleteRoute = async (req, res) => {

    const journey = await Journey.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        journey
    })

}

//Add Passenger Journey
exports.addPassengersJourney = async (req, res, next) => {

    const journey = await Journey.findById(req.params.id)
    const user = await User.findById(req.user.id)

    if (journey.price <= user.AccountBalance) {
        if (journey.maxPassengers > journey.countPassengers) {

            let journey = await Journey.findOneAndUpdate({ _id: req.params.id },
                { $push: { passengers: [{ passengerID: req.user.id }] } })

            journey = await Journey.findByIdAndUpdate(req.params.id, { countPassengers: journey.countPassengers + 1 })

            if (!journey) {
                res.status(201).json({
                    success: true,
                    message: "User Not Added To Journey"
                })
            }

            let user = await User.findByIdAndUpdate(req.user.id, { $push: { trips: [{ tripID: journey._id }] } })

            user = await User.findByIdAndUpdate(req.user.id, { AccountBalance: user.AccountBalance - journey.price })

            res.status(200).json({
                success: true,
                journey,
                user
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Vehical Sheets are full"
            })
        }
    } else {
        res.status(200).json({
            success: true,
            message: "Your Account Balance Is Insufficient"
        })
    }



}

//Remove Passengers Journey
exports.removePassengersJourney = async (req, res, next) => {

    let journey = await Journey.findByIdAndUpdate(req.params.id, { $pull: { passengers: { passengerID: req.user.id } } })

    let user = await User.findByIdAndUpdate(req.user.id, { $pull: { trips: { tripID: journey._id } } })

    journey = await Journey.findByIdAndUpdate(req.params.id, { countPassengers: journey.countPassengers - 1 })

    user = await User.findByIdAndUpdate(req.user.id, { AccountBalance: user.AccountBalance + (journey.price * 0.5) })

    res.status(200).json({
        success: true,
        journey
    })
}

//Remove Passengers Journey
exports.passengersJourneyCheckIn = async (req, res, next) => {

    const journey = await Journey.findOneAndUpdate({ _id: req.params.id, "passengers.passengerID": req.user.id },
        { $set: { "passengers.$.checkInTime": Date.now() } }, {
        useFindAndModify: false,
        new: true
    })

    res.status(200).json({
        success: true,
        journey
    })
}

//passengers Journey Check Out
exports.passengersJourneyCheckOut = async (req, res, next) => {

    const journey = await Journey.findOneAndUpdate({ _id: req.params.id, "passengers.passengerID": req.user.id },
        { $set: { "passengers.$.checkOutTime": Date.now() } }, {
        useFindAndModify: false,
        new: true
    })

    const user = await User.findOneAndUpdate({ _id: req.user.id, "trips.tripID": req.params.id }, { $set: { "trips.$.isCompleted": true } }, {
        useFindAndModify: false,
        new: true
    })

    res.status(200).json({
        success: true,
        journey
    })
}
