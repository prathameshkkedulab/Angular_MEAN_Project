const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://AngularProject:angular123@cluster0.fmawkgw.mongodb.net/AngularDB?retryWrites=true&w=majority', { useNewUrlParser: true });
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        },
    },
    password: String,
});

var userModel = mongoose.model('Users', userSchema);
module.exports = userModel; 