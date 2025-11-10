import express from 'express';
import projectCtrl from '../controllers/project.controller.js';
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router.route('/api/projects').post(projectCtrl.create);

router.route('/api/projects').get(projectCtrl.list);

router.route('/api/projects').delete(projectCtrl.removeMany);

router.param('projectId', projectCtrl.projectByID);

router.route('/api/projects/:projectId').get(projectCtrl.read);

router.route('/api/projects/:projectId').put(projectCtrl.update);

router.route('/api/projects/:projectId').delete(projectCtrl.remove);

// Auth routes for signin & signout
router.post("/auth/signin", authCtrl.signin);
router.get("/auth/signout", authCtrl.signout);

// Example protected route (replace with your actual route)
router.get("/api/protected", authCtrl.requireSignin, (req, res) => {
  res.json({ message: `Welcome user ${req.auth._id}` });
});

export default router;
