
import Dashboard from "./component/Dashboard"
import Sidebar from "./component/Sidebar"
import { useState } from "react"

function App() {
 let  [user,setUser]= useState([
{
        firstName:"jhon",
        lastName:"doe",
        email:"jd@gmail.com",
        mobile:"9087654322",
        batch:"B51" 
},
{

  firstName:"Ajith",
  lastName:"Kumar",
  email:"athi@gmail.com",
  mobile:"8087654000",
  batch:"B51" 
},

{

  firstName:"Athi",
  lastName:"sara",
  email:"sara@gmail.com",
  mobile:"8887654321",
  batch:"B51" 
}

 ])

 

  return <>
       <div id="wrapper">
<Sidebar />
<Dashboard  user={user} setUser={setUser}/>

   </div>

    </>
  
}

export default App
