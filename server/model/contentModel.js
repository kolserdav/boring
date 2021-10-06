import mongoose from 'mongoose'

const Category = new mongoose.Schema({
    _id: { type: String, required: true },
})

const Content = new mongoose.Schema({
    title: { type: String, required: true },
    categoriesMain: { type: String },
    categoriesChild: [Category],
    picture: { type: String },
})

export default mongoose.model('Content', Content)