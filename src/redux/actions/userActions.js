import {USER_DATA} from '../constants'

const updateUser = (payload) => {
    return {
        type: USER_DATA,
        payload: payload
    }
}

export {
    updateUser
}