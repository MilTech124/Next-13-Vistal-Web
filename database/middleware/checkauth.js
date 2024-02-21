import {getSession} from 'next-auth/react'

const checkAuth = async (req, res, next) => {
	const session = await getSession({req});
	console.log(session);
	if(!session) {
		return res.status(401).json({message: "Unauthorized"});
	}
	next();
}