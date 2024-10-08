import axios from "axios";

// Action Constants
// const initAccUser = "account/initUser"
export const incAccount = "account/increment"
export const decAccount = "account/decrement"
export const incByAmtAccount = "account/incrementByAmount"
export const incBonus = "bonus/increment"
export const decBonus = "bonus/decrement"
export const getAccUserPending = "account/getUser/pending"
export const getAccUserFulfilled = "account/getUser/fulfilled"
export const getAccUserRejected = "account/getUser/rejected"

// Async Api call  
export function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(getAccountUserPending())
            const { data } = await axios.get(`http://localhost:8080/accounts/${id}`)
            dispatch(getAccountUserFulfilled(data.amount))
        } catch (error) {
            dispatch(getAccountUserRejected(error.message))
        }
    }


}


// Action Creators
export function getAccountUserFulfilled(value) {
    return { type: getAccUserFulfilled, payload: value }
}

export function getAccountUserPending() {
    return { type: getAccUserPending }
}

export function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error: error }
}

export function increment() {
    return { type: incAccount }
}

export function decrement() {
    return { type: decAccount }
}

export function incrementByAmount(value) {
    return { type: incByAmtAccount, payload: value }
}

export function incrementBonus() {
    return { type: incBonus }
}

export function decrementBonus() {
    return { type: decBonus }
}

