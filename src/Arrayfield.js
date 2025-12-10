import { useState } from "react";

const Arrayfield = ()=>{
    const hd = ["digital-art","coding","painting"]
    const [fieldarry,setfieldarray] = useState([{first:"",last:"",hobbies:""}]);
  
  const change = (e, index) => {
    const updated = [...fieldarry];
    updated[index][e.target.name] = e.target.value;
    setfieldarray(updated);
  };
    const add = (e)=>{
        e.preventDefault();
        setfieldarray([...fieldarry,{first:"",last:"",hobbies:""}]);
    }
    const remove = (fi)=>{
       setfieldarray(fieldarry.filter((_,di)=>{
              return di !== fi
       }))
    }
    return(
        <div>
            <h1>Array Field</h1>
            {fieldarry.map((fe,fi)=>{
                  return(
                    <div key={fi}>
                          <input type="text" name="first" placeholder="first name" value={fieldarry.first}    onChange={(e) => change(e, fi)} />
                          <br/>
                          <input type="text" name="lastst" placeholder="last name" value={fieldarry.last}  onChange={(e) => change(e, fi)}/>
                           <br/>
                           <select value={fieldarry.hobbies} name="hobbies" onChange={(e) => change(e, fi)}>
                              <option value="">Select Hobbies</option>
                             {hd.map((he,hi)=>{
                                 return(
                                    <div key={hi}>
                                         <option value={he}>{he}</option>
                                    </div>
                                 );
                             })}
                           </select>
                                 <br/>
                           <button onClick={add}>ADD</button>
                                 <br/>
                           <button onClick={()=>remove(fi)}>REMOVE</button>
                    </div>
                  );
            })}




        </div>
    );
}
export default Arrayfield;