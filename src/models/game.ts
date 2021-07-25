import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const GameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
});

// https://github.com/dherault/serverless-offline/issues/258#issuecomment-501000703
let game;
const collection = 'Game';

try {
    game = mongoose.connection.model(collection);
} catch (e) {
    game = mongoose.model(collection, GameSchema);
}

export default game;
