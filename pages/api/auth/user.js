import connectToDb from "../../../database/db";
import nc from "next-connect";
import checkAuth from "../../../database/middleware/checkauth";

const handler = nc();

handler
	.use(checkAuth)
	.get( async(req, res) => {
		try {
			await axios.get("/api/auth/user");
		} catch (error) {
			
		}
	})