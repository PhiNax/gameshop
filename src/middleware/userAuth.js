function authMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/login');
    }
    next();
}

function guestMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/login');
    }
    next();
}

module.exports = { authMiddleware, guestMiddleware };