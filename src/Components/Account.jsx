import { useSelector } from "react-redux"


function Account() {
 const amount = useSelector((state)=>state.account.amount)
 const points = useSelector((state)=>state.bonus.points)

  return (
    <div style={{backgroundColor:"#629584", width:"500px", height:"150px"}}>
    <h2 style={{color:"#243642"}}>Account Component</h2>
     <h2 style={{color:"#FFEB00"}}>Amount : {amount}</h2>
     <h2 style={{color:"#433878"}}>Points : {points}</h2>
</div>  )
}

export default Account