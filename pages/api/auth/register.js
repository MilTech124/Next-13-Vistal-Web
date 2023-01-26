import connectToDb from "../../../database/db";
import User from "../../../database/models/user.model";
import { userExists } from "../../../database/services/user.service";
import { passwordHash } from "../../../database/utils/tools";

const handler = async (req, res) => {
  await connectToDb();

  if (req.method === "POST") {
    const { login, password } = req.body;

    if (userExists(login)) {
      res.status(400).json({ message: "UserExistss" });
      return;
    }

    const hashedPass = await passwordHash(password);

    try {
      const user = new User({
        login,
        password: hashedPass,
      });
      await user.save();
      res.status(200).json({
        _id: user.id,
        login: user.login,
        role: user.role,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  }
};
export default handler;
