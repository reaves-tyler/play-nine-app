import connectDB from "../../../middleware/mongodb";
import Game from "../../../models/game";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name } = req.body;
    if (name) {
      try {
        var game = new Game({
          name,
          active: true,
        });

        var created = await game.save();
        return res.status(200).send(created);
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
