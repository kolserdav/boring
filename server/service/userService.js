import userModel from "../model/userModel.js"

class eventService {

    async registration({email, role, password}) {
        const user = await userModel.create({email, password, role: role})
        return user
    }

}

export default new eventService()