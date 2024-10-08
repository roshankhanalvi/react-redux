import {
    incAccount,decAccount,incByAmtAccount,
    getAccUserFulfilled,  getAccUserPending,getAccUserRejected} from '../actions'

export function accountReducer(state = { amount: 1 }, action) {
    switch (action.type) {
        case getAccUserFulfilled:
            return { amount: action.payload, pending: false };
        case getAccUserRejected:
            return { ...state, error: action.error, pending: false };
        case getAccUserPending:
            return { ...state, pending: true };
        case incAccount:
            return { amount: state.amount + 1 };
        case decAccount:
            return { amount: state.amount - 1 };
        case incByAmtAccount:
            return { amount: state.amount + action.payload };
        default:
            return state;

    }


}