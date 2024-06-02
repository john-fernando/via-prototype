export const getRegister = (req, res) => {
	try {
		res.locals.user = req.user;
		res.render("user/register");
	} catch (error) {
		console.log(error);
		res.redirect("/");
	}
};
