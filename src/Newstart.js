import { useState } from "react";
import {create} from '././Redux/Newstartslice'
import { useDispatch } from "react-redux";

const Newstart = ({setshowpoup,setshowupdate}) => {
    const [userdata,setuserdata] = useState({first_name:"",last_name:"",number:""});
    const dis = useDispatch()
    const design = {
       width:"300px",
       border:"2px solid red",
       position:"absolute",
       top:"50%",
       left:"50%",
       transform:"transition(-50%,-50%)",

    }
    const change =(e)=>{
        setuserdata({...userdata,[e.target.name]:e.target.value});
    }
    const create1 = (e)=>{
        e.preventDefault();
        dis(create(userdata));  
        setuserdata({first_name:"",last_name:"",number:""}) 
        setshowpoup(false) 
      
    }
    const cancel = ()=>{
       setshowpoup(false  )
    }
    return (
        <div style={design}>
            <h1>CREATE DATA</h1>
            <br/>
            <input type="text" placeholder="First Name" name="first_name" onChange={change} value={userdata.first_name} />
            <br />
            <input type="text" placeholder="Last Name" name="last_name" onChange={change} value={userdata.last_name} />
            <br />
            <input type="number" placeholder="Phone Number" name="number" onChange={change} value={userdata.number} />
            <br />
            <button onClick={create1}>CREATE</button> 
            <br></br>
            <button onClick={cancel}>CANCEL</button>
        </div>
    );
}
export default Newstart;