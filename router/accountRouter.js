const express = require("express");
const router = express.Router();

// const validateToken = require("../middleware/validateToken");
const validateToken2 = require('../middleware/validateToken2.0');

const CreateActTitle = require("../controller/Account/accountTitle/createActTitle");
const deleteActTitle = require("../controller/Account/accountTitle/deleteActTite");
const showAllActTitle = require("../controller/Account/accountTitle/showAllActTitle");
const upadateTitleName = require("../controller/Account/accountTitle/upadateTitleName");

const AddActDetail = require("../controller/Account/accountDetail/addActDetail");
const deleteActDetail = require("../controller/Account/accountDetail/deleteActDetail");
const showAllActDetail = require("../controller/Account/accountDetail/showAllActDetail");
const UpdateActDetail = require("../controller/Account/accountDetail/updateActDetail");


// --------------------------Account-Tite---------------------------------------------//
// create;
router.route("/createtitle").post(validateToken2,CreateActTitle);
// detete
router.route("/deletetitle").delete(validateToken2,deleteActTitle);
// show-all
router.route("/showtitle").get(validateToken2,showAllActTitle);
// update
router.route("/updatetitle").put(validateToken2,upadateTitleName);

// --------------------------Account-detail-----------------------------------------//
// add
router.route("/adddetail").post(validateToken2,AddActDetail);
// detete
router.route("/deletedetail").delete(validateToken2,deleteActDetail);
// show-all
router.route("/showdetail").get(validateToken2,showAllActDetail);
// update
router.route("/updatedetail").put(validateToken2,UpdateActDetail);


module.exports = router;