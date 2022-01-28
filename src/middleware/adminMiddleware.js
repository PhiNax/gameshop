const { User } = require("../database/connectDB");

async function adminMiddleware(req, res, next) {

	if (req.session.userLogged) {
		let email = req.session.userLogged.email;

		try {
			const user = await User.findOne({
				where: {
					email: email
				}
			});
			if (user.access === 0) {
				next();
			}
			else {
				res.redirect('/');
			}
		}
		catch (err) {
			throw new Error('Find user admmin: failed =>' + err.message);
		}
	}
	else {
		res.redirect('/');
	}
}

module.exports = adminMiddleware;