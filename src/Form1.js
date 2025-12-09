import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {adduser,save} from "./Redux/Form1slice"

const Form1 = ()=>{

    const dispatch = useDispatch();
    const alldata = useSelector((state)=>state.newuserdata.persons);

    const hobbies = ["coding","digital-art","painting"];

    const [userdata,setuserdata] = useState({
        first:"",
        last:"",
        userhobbies:""
    });

    const [uid,setuid] = useState(null);

    const change = (e)=>{
        setuserdata({
            ...userdata,
            [e.target.name]: e.target.value
        });
    };

    const add = (e)=>{
        e.preventDefault();
        dispatch(adduser(userdata));
        setuserdata({ first:"", last:"", userhobbies:"" })
    };

    const up = (ae,ai)=>{
        setuserdata(ae);
        setuid(ai);
    };

    const updated = ()=>{
        dispatch(save({ id: uid, ...userdata }));
        setuid(null);
        setuserdata({ first:"", last:"", userhobbies:"" })
    };

    return(
        <div>

           <h1>USERDATA</h1>

           <input
             placeholder="First Name"
             name="first"
             value={userdata.first}
             onChange={change}
           />

           <input
             placeholder="Last Name"
             name="last"
             value={userdata.last}
             onChange={change}
           />

           <select
             name="userhobbies"
             value={userdata.userhobbies}
             onChange={change}
           >
             <option value="">Select Hobbies</option>

             {hobbies.map((hd,hi)=>(
                 <option key={hi} value={hd}>
                     {hd}
                 </option>
             ))}
           </select>

           {uid !== null
             ? <button onClick={updated}>SAVEDATA</button>
             : <button onClick={add}>ADD</button>
           }

           <hr/>

           {alldata.map((ae,ai)=>(
             <div key={ai}>
                 <h3>{ae.first}</h3>
                 <h3>{ae.last}</h3>
                 <h3>{ae.userhobbies}</h3>

                 <button onClick={()=>up(ae,ai)}>
                     UPDATE
                 </button>

                 <hr/>
             </div>
           ))}

        </div>
    );
}

export default Form1;
