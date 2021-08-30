import mongoose from 'mongoose'

const User = new mongoose.Schema({
    email: { type: String, required: true },
    password: {type: String, required: true},
    savedCategories: {type: Object},
    savedEvents: {type: Object},
    role: {type: String}
})

export default mongoose.model('User', User)