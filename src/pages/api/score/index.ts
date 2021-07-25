import connectDB from '../../../middleware/mongodb';
import Score from '../../../models/score';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { gameID, player, value } = req.body;

        if (gameID && player && value) {
            try {
                const score = new Score({
                    gameID,
                    player,
                    value,
                });

                var created = await score.save();
                return res.status(200).send(created);
            } catch (error) {
                return res.status(500).send(error.message);
            }
        } else {
            res.status(422).send('data_incomplete');
        }
    }
};

export default connectDB(handler);
