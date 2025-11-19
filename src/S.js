import { useState } from "react";


const S = () => {
    const [userdata, setuserdata] = useState({ first: "", last: "" })
    const [getid,setid] = useState(null)
    const[list, setlist] = useState([])
    const change = (e) => {
        setuserdata({ ...userdata, [e.target.name]: e.target.value })
    }
    const add = (e) => {
        e.preventDefault();
        setlist([...list, userdata]);
        setuserdata({ first: "", last: "" })
    }
    const update = (id)=>{
        
       const updated = list[id] ;
       setuserdata({first:updated.first,last:updated.last})
       setid(id)
      
    } 
    const up = ()=>{
           const save  = [...list];
           save[getid] = userdata;
           setlist(save)
            setid(null)
             setuserdata({ first: "", last: "" })
    }  
    const del = (ele)=>{
       const deleted =  list.filter((e,i)=>{
            return  ele !== i    
          })
          setlist(deleted);
          setuserdata({ first: "", last: "" })
    }    
    return (
        <div>
            <input placeholder="First Name" name="first" type="text" onChange={change} value={userdata.first} />
            <br></br>
            <input placeholder="Last Name" name="last" type="text" onChange={change} value={userdata.last} />
            <br></br>
          {getid !== null  ?<button onClick={up}>UPDATED</button>:<button onClick={add}>Add Data</button>}
            <br></br>
            <h1>USER DATA</h1>
            {
                list.map((ech, ele) => {
                  return(
                      <div key={ele}>
                        <h1>{ech.first}</h1>
                        <h1>{ech.first}</h1>
                        <button onClick={()=>update(ele)}>UPDATE</button>
                        <button onClick={()=>del(ele)}>DELETE</button>
                    </div>
                  );
                })
            }
        </div>
    )
}
export default S;