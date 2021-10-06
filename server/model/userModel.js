import mongoose from 'mongoose'

const Category = new mongoose.Schema({
    _id: { type: String, required: true },
})

const User = new mongoose.Schema({
    email: { type: String, required: true },
    password: {type: String, required: true},
    savedCategories: [Category],
    savedEvents: {type: Object},
    role: {type: String}
})

export default mongoose.model('User', User)