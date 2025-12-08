

import { useState } from "react";
import PP2 from "./PP2";
const PP = () => {
   const rd = ["frontend-devloper", "backend-devloper", "fullstack-devloper", "devops-engineer"]
   const [userdata, setuserdata] = useState({ first: "", last: "", role: "", });
   const [pass, setpass] = useState();
   const [list, setlist] = useState([])
   const [show, setshow] = useState(false);
   const [id, setid] = useState(null)

   const change = (e) => {
      setuserdata({ ...userdata, [e.target.name]: e.target.value });
   }
   const add = (e) => {
      e.preventDefault()
      setlist([...list, userdata]);
      setuserdata({ first: "", last: "", role: "" })
   }
   const up = (e, i) => {
      setshow(true);
      setpass(e)
      setid(i);
   }
   const del = (i) => {
      setlist(list.filter((dd, di) => {
         return di !== i
      }))

   }
   return (
      <div>
         <h1>CREATE DRPDOWN DATA</h1>
         <br></br>
         <input type="text" placeholder="First Name" value={userdata.first} name="first" onChange={change} />
         <br></br>
         <input type="text" placeholder="Last Name" value={userdata.last} name="last" onChange={change} />
         <br></br>
         <select value={userdata.role} name="role" onChange={change}  >
            <option value="value">Select Role</option>
            {rd.map((ce, ci) => {
               return (
                  <div key={ci}>
                     <option value={ce}>{ce}</option>
                  </div>
               );
            })}

         </select>
         <br></br>
         <button onClick={add}>ADD</button>
         <br></br>
         {
            list.map((e, i) => {
               return (
                  <div key={i}>
                     <h1>{e.first}</h1>
                     <br></br>
                     <h1>{e.last}</h1>
                     <br></br>
                     <h1>{e.role}</h1>
                     <br></br>
                     <button onClick={() => up(e, i)}>UPDATE</button>
                     <br></br>
                     <button onClick={() => del(i)}>DELETE</button>
                  </div>
               )
            })
         }
         {show && <PP2 setshow={setshow} pass={pass} id={id} list={list} setlist={setlist} />}
      </div>
   );
}
export default PP;