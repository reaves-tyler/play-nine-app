import connectDB from "../../../middleware/mongodb";
// import bcrypt from '../../middleware/bcrypt';
import Game from "../../../models/game";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const { id } = req.query;
    const game = await Game.findById(id);

    return res.status(200).send(game);
  }
};

export default connectDB(handler);
