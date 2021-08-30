import mongoose from 'mongoose'

const Category = new mongoose.Schema({
    _id: { type: String, required: true },
})

const Event = new mongoose.Schema({
    title: { type: String, required: true },
    categories: [Category],
    picture: { type: String },
    description: { type: String },
    location: { type: String },
    locationUri: { type: String }
})

export default mongoose.model('Event', Event)