import { useDispatch, useSelector } from "react-redux"
import { incrementBonus, decrementBonus, increment, decrement, getUserAccount } from "../actions"


function Bonus() {
    const amount = useSelector((state) => state.account.amount)
    const points = useSelector((state) => state.bonus.points)
    const dispatch = useDispatch()
    return (
        <div style={{ backgroundColor: "#387478", width: "500px", height: "150px", color: "white" }}>
            <h2 style={{ color: "#243642" }}>Bonus Component</h2>
            <h2 style={{ color: "#FFEB00" }}>Amount : {amount}</h2>
            <h2 style={{ color: "#433878" }}>Points : {points}</h2>
            <button onClick={() => dispatch(incrementBonus())}>Bonus +</button>
            <button onClick={() => dispatch(decrementBonus())}>Bonus -</button>
            <button onClick={() => dispatch(increment())}>Amount +</button>
            <button onClick={() => dispatch(decrement())}>Amount -</button>
            <button onClick={() => dispatch(getUserAccount(2))}>USER</button>
        </div>
    )
}

export default Bonus