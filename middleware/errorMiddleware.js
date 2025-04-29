// Check if userName ends with "@gmail.com"
function userMiddleware(req, res, next) {
	const { firstName, lastName, userName, password } = req.body
	if (!userName.endsWith("@gmail.com")) {
		return res.status(403).json({ message: "Invalid username. Must ends by @gmail.com" });
	}
	next()
}

// Ensure request content type is JSON
function jsonCheckMiddleware(req, res, next) {
	if (req.headers['content-type'] !== 'application/json') {
		return res.status(415).json({ message: "Unsupported content type. Use JSON" });
	}
	next()
}

// Validate todos array and check task length
function taskMiddleware(req, res, next) {
	const todos = req.body.todos;
	if (todos) {
		for (const todo of todos) {
			if (todo.length > 140) {
				return res.status(403).json({ message: "The task entered is too long (>140 characters)" });
			}
		}
	} else {
		return res.status(400).json({ message: "Invalid or missing todos" });
	}
	next();
}

module.exports = { userMiddleware, jsonCheckMiddleware, taskMiddleware };