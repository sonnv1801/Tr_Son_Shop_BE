const middlewareController = require("../controllers/middlewareControllers");
const userController = require("../controllers/usercontrollers");

const router = require("express").Router();

router.get("/", middlewareController.verifyToke, userController.getAllUsers);
router.delete(
  "/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
