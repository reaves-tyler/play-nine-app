import connectDB from "../../../middleware/mongodb";
// import bcrypt from '../../middleware/bcrypt';
import User from "../../../models/user";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const user = await User.findById(id);
    console.log(id, user);

    return res.status(200).send(user);
  }
};

export default connectDB(handler);
