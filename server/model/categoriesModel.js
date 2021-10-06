import mongoose from 'mongoose'

const Categories = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    picture: {type: String},
    color: {type: String}
})

export default mongoose.model('Categories', Categories) 