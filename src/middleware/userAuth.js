function authMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/user/profile');
    }
    next();
}

// Check if there a session with the given property userLogged
function guestMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/user/login');
    }
    next();
}

module.exports = { authMiddleware, guestMiddleware };