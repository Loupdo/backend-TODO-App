const jwt = require('jsonwebtoken');
// Middleware to verify JWT and attach payload
function jwtMiddleware(req, res, next) {
	const jwtToken = req.headers['authorization']
	const tokenExtract = jwtToken.split(' ')[1]
	try {
		const payload = jwt.verify(tokenExtract, 'HyperionDev');
		req.payload = payload;
		next();
	} catch (error) {
		res.status(403).json({ message: 'Invalid token' });
	}
}
// Export the middleware to be used in userDataRoute.js
module.exports = jwtMiddleware;