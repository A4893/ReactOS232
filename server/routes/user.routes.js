import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";
const router = express.Router();

// User CRUD operations
router.route("/api/users").post(userCtrl.create);
router.route("/api/users").get(userCtrl.list);
router.route("/api/users").delete(userCtrl.removeMany);
router.param("userId", userCtrl.userByID);
router.route("/api/users/:userId").get(userCtrl.read);
router.route("/api/users/:userId").put(userCtrl.update);
router.route("/api/users/:userId").delete(userCtrl.remove);

// Auth routes for signin & signout
router.post("/auth/signin", authCtrl.signin);
router.get("/auth/signout", authCtrl.signout);

// Example protected route (replace with your actual route)
router.get("/api/protected", authCtrl.requireSignin, (req, res) => {
  res.json({ message: `Welcome user ${req.auth._id}` });
});

export default router;
