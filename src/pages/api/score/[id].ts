import connectDB from '../../../middleware/mongodb';
import Score from '../../../models/score';
import _ from 'lodash';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const { id } = req.query;
        const scores = await Score.find({ gameID: id });

        const groupedScores = _(scores)
            .groupBy('player')
            .map((objs, key) => ({
                player: key,
                value: _.sumBy(objs, 'value'),
                count: objs.length + 1,
            }))
            .sort((a, b) => a.value - b.value)
            .value();

        return res.status(200).send(groupedScores);
    }
};

export default connectDB(handler);
