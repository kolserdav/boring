import userModel from "../model/userModel.js"

class eventService {

    async registration({ email, role, password }) {
        const user = await userModel.create({ email, password, role: role })
        return user
    }

    async update(id, categories) {
        const user = await userModel.findById(id, (err, user) => {
            if (err) {
                console.log(err)
                throw new Error('')
            } else {
                if (!user) {
                    throw new Error('User not found')
                } else {
                    user.savedCategories = categories
                    user.save((err, updatedUser) => {
                        if (err) {
                            console.log(err)
                            throw new Error('')
                        } else {
                            return updatedUser
                        }
                    })
                }
            }
        })
        return user
    }
}

export default new eventService()