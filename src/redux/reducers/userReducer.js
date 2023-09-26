import { USER_DATA } from "../constants"

const user = {
    id: 12,
    name: "HAmza",
    mail: 'test@gmail.com',
    token: '192 | ydausajdsajjj'
}

const userReducer = (state = user, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_DATA:
            console.log("HERE IS THE CONYROL");
        return {
            ...state,
            ...payload
        }

        default:
            return state
    }
}

export {
    userReducer
}