import express from 'express'
    import qualificationCtrl from '../controllers/education.controller.js' 
    import authCtrl from "../controllers/auth.controller.js";

    const router = express.Router()
    router.route('/api/qualifications').post(qualificationCtrl.create)
    router.route('/api/qualifications').get(qualificationCtrl.list)
    router.route('/api/qualifications').delete(qualificationCtrl.removeMany)
    router.param('qualificationId', qualificationCtrl.qualificationByID)
    router.route('/api/qualifications/:qualificationId').get(qualificationCtrl.read)
    router.route('/api/qualifications/:qualificationId').put(qualificationCtrl.update)
    router.route('/api/qualifications/:qualificationId').delete(qualificationCtrl.remove)
// Auth routes for signin & signout
router.post("/auth/signin", authCtrl.signin);
router.get("/auth/signout", authCtrl.signout);

// Example protected route (replace with your actual route)
router.get("/api/protected", authCtrl.requireSignin, (req, res) => {
  res.json({ message: `Welcome user ${req.auth._id}` });
});

    export default router


