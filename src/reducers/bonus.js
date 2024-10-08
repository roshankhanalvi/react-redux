import { incBonus, decBonus } from '../actions'
export function bonusReducer(state = { points: 1 }, action) {
    switch (action.type) {
        case incBonus:
            return { points: state.points + 1 };
        case decBonus:
            return { points: state.points - 1 };

        default:
            return state;

        // }


    }
}