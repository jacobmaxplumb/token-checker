const admin = require('firebase-admin');

admin.initializeApp({
    apiKey: process.env.API_KEY ? process.env.API_KEY : "AIzaSyDwiwaKPwG8AUqQ84gNOXl_wyzWqvo_y5U",
    authDomain: process.env.AUTH_DOMAIN ? process.env.AUTH_DOMAIN : "social-project-da4c7.firebaseapp.com",
    projectId: process.env.PROJECT_ID  ? process.env.PROJECT_ID : "social-project-da4c7",
    storageBucket: process.env.STORAGE_BUCKET  ? process.env.STORAGE_BUCKET : "social-project-da4c7.appspot.com",
    messagingSenderId: process.env.MSG_SND_ID  ? process.env.MSG_SND_ID : "197332785691",
    appId: process.env.APP_ID  ? process.env.APP_ID : "1:197332785691:web:d4ebaeb110219ca64976be",
    measurementId: process.env.MEASUREMENT_ID  ? process.env.MEASUREMENT_ID : "G-MDMRR431DD"
});

const getAuthToken = (req) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        req.authToken = req.headers.authorization.split(' ')[1];
    } else {
        req.authToken = null;
    }
};

const checkIfAuthenticated = async (req) => {
    getAuthToken(req);
    const { authToken } = req;
    const userInfo = await admin.auth().verifyIdToken(authToken).catch(e => e);
    return userInfo;
};

module.exports = {
    checkIfAuthenticated
}