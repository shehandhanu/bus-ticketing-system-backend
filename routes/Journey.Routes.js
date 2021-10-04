const express = require('express');
const router = express.Router();

const { addRoute,
    getAllRoutes,
    updateRoute,
    deleteRoute,
    addPassengersJourney,
    removePassengersJourney,
    passengersJourneyCheckIn,
    passengersJourneyCheckOut } = require('../controllers/Journey.Controller');
const { isAuthenticatedUser, authorizeRoles } = require('../utils/authenticator')

//Add Journey
router.route('/addjourney').post(addRoute);

//Get All Journey
router.route('/getalljourney').get(getAllRoutes)

//Update Journey
router.route('/updatejourney/:id').put(updateRoute);

//Delete Journey
router.route('/removejourney/:id').put(deleteRoute);

//Add Passengers Journey
router.route('/addpassengersjourney/:id').get(isAuthenticatedUser, addPassengersJourney);

//Remove Passengers Journey
router.route('/removepassengersjourney/:id').get(isAuthenticatedUser, removePassengersJourney);

//Passengers Journey Check In
router.route('/passengersjourneycheckin/:id').get(isAuthenticatedUser, passengersJourneyCheckIn);

//Passengers Journey Check Out
router.route('/passengersjourneycheckout/:id').get(isAuthenticatedUser, passengersJourneyCheckOut);



module.exports = router;