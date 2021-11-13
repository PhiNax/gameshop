function userLoggedMiddlevare(req, res, next) {
    res.locals.isLoggedIn = false;

    if (req.session.userLogged) {
        res.locals.isLoggedIn = true;
    }

    next()
}

module.exports = userLoggedMiddlevare;