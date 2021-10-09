const express = require("express");
const router = express.Router();

const {
    addRoute,
    getRoutes,
    updateRoute,
    deleteRoute,
} = require("../controllers/TimeTable.Controller");

//Register User
router.route("/addroute").post(addRoute);

router.route("/getroutes").get(getRoutes);

router.route("/updateroute/:id").put(updateRoute);

router.route("/deleteroute/:id").delete(deleteRoute);

module.exports = router;
