import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const ScoreSchema = new Schema({
    gameID: {
        type: String,
        required: true,
    },
    player: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
});

// https://github.com/dherault/serverless-offline/issues/258#issuecomment-501000703
let score;
const collection = process.env.SCORE_COLLECTION || 'ScoreTest';

try {
    score = mongoose.connection.model(collection);
} catch (e) {
    score = mongoose.model(collection, ScoreSchema);
}

export default score;
