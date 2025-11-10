import express from 'express'
    import contactCtrl from '../controllers/contact.controller.js' 
    import authCtrl from "../controllers/auth.controller.js";


    const router = express.Router()
    router.route('/api/contacts').post(contactCtrl.create)
    router.route('/api/contacts').get(contactCtrl.list)
    router.route('/api/contacts').delete(contactCtrl.removeMany)
    router.param('contactId', contactCtrl.contactByID)
    router.route('/api/contacts/:contactId').get(contactCtrl.read)
    router.route('/api/contacts/:contactId').put(contactCtrl.update)
    router.route('/api/contacts/:contactId').delete(contactCtrl.remove)

    // Auth routes for signin & signout
    router.post("/auth/signin", authCtrl.signin);
    router.get("/auth/signout", authCtrl.signout);
    
    // Example protected route (replace with your actual route)
    router.get("/api/protected", authCtrl.requireSignin, (req, res) => {
      res.json({ message: `Welcome user ${req.auth._id}` });
    });
    

    export default router


