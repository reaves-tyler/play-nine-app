import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
});


// https://github.com/dherault/serverless-offline/issues/258#issuecomment-501000703
let user

try {
    user = mongoose.connection.model('User')
} catch (e) {
    user = mongoose.model('User', UserSchema)
}

module.exports = user