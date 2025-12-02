import { useEffect, useState } from "react";
const PP2 = ({ setshow, pass, id, list, setlist }) => {
   const rd = ["frontend-devloper", "backend-devloper", "fullstack-devloper", "devops-engineer"]
   const [updata, setupdata] = useState({ first: "", last: "", role: "" })
   useEffect(() => {
      setupdata({ first: pass.first, last: pass.last, role: pass.role })
   }, [pass])
   const design = {
      height: "400px",
      width: "400px",
      border: "2px solid red",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
   }
   const cencel = () => {
      setshow(false)
   }
   const change = (e) => {
      setupdata({ ...updata, [e.target.name]: e.target.value })
   }
   const save = (e) => {
      e.preventDefault()
      // const update = [...list]
      // update[id] = updata;
      // setlist(update)

      const update = list.map((item, index) =>
         index === id ? updata : item
      );

      setlist(update);


   }
   return (
      <div style={design}>
         <h1>UPDATE DROPDOWN DATA</h1>
         <br></br>
         <input type="text" placeholder="First Name" name="first" value={updata.first} onChange={change} />
         <br></br>
         <input type="text" placeholder="Last Name" name="last" value={updata.last} onChange={change} />
         <br></br>
         <select value={updata.role} name="role" onChange={change}>
            {rd.map((ue, ui) => {
               return (
                  <div>
                     <option>{ue}</option>
                  </div>
               );
            })}

         </select>
         <br></br>
         <button onClick={save}>SAVE</button>
         <br></br>
         <button onClick={cencel}>cancel</button>
      </div>
   );
}
export default PP2;