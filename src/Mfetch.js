




import { useEffect, useState } from "react";
import Mfetch2 from "./Mfetch2";
import Mfetch3 from "./Mfetch3"
const Mfetch = ()=>{
        const api = "https://67ab452f5853dfff53d6c917.mockapi.io/app/user";
        const [hide,sethide] = useState(false);
        const [addpipup,setaddpopup] = useState(false)
        const [list,setlist] = useState([]);
        const [data,setdata] = useState();
        const show = async()=>{
             try {
                   const res = await fetch(api);
                   const result = await res.json();
                   setlist(result);
             } catch (error) {
                 throw error;  
             }
        }
        useEffect(()=>{show()},[]);

        const showpopup = (item)=>{
            sethide(true);
            setaddpopup(false)
            setdata(item)     
        }
        const del = async(item)=>{
            const d = item.id 
            try {
                   const res = await fetch(`${api}/${d}`,{
                    method:"DELETE"
                   })
                  
                   setlist(list.filter((ech)=>{return ech.id !== d}))

            } catch (error) {
                throw error
            }
             
        }

        const openadd = ()=>{
            setaddpopup(true) 
            sethide(false)    
        }

    return(
        <div>
              <h1>{api}</h1>
              <button onClick={openadd}>ADD</button>
             { hide && <Mfetch2 data={data} api={api} list={list} setlist={setlist} sethide={sethide}/>}
          {addpipup &&   <Mfetch3 setaddpopup={setaddpopup}  list={list} setlist={setlist} api={api} />}
              <br></br>
              {list.map((item)=>{
                return(
                    <div key={item.id} >
                        <b>{item.first_name}</b>
                        <br></br>
                        <b>{item.last_name}</b>
                        <br></br>
                        <b>{item.number}</b>
                        <br></br>
                        <b>{item.id}</b>
                        <br></br>
                        <button onClick={()=>showpopup(item)}>UPDATE</button>
                        <button onClick={()=>del(item)}>DELETE</button>
                    </div>
                );
              })}


        </div>
    );
}
export default Mfetch;