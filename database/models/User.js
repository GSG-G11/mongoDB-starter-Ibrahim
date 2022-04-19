const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	firstName: { type: 'string', required: true },
	lastName: 'string',
	age: 'number',
	city: 'string',
});

// creating a model so we can query it.
const User = model('User', userSchema);

module.exports = User;
