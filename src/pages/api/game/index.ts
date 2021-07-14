import connectDB from "../../../middleware/mongodb";
import Game from "../../../models/game";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const games = await Game.find();

    return res.status(200).send(games);
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
