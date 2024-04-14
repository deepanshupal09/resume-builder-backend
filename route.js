const { Router } = require("express")
const controller = require("./controller")
const router = Router();

router.get("/", controller.getData);
router.post("/",controller.addUser);
router.get("/getUserByEmail",controller.getUserByEmail);
router.get("/getAllDetailsByEmail", controller.getAllDetailsByEmail);
router.post("/addDetails",controller.addDetails);
router.get("/getDetailsByDetailId", controller.getDetailsByDetailId);
router.post("/updateDetailsByDetailId", controller.updateDetailsByDetailId);
router.post("/deleteDetailsByDetailId", controller.deleteDetailsByDetailId);
router.post("/deleteUserAndDetails", controller.deleteUserAndDetails);
router.post("/updatePasswordFromUsers", controller.updatePasswordFromUsers);

module.exports = router;