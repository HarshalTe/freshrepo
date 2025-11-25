





import { useEffect, useState } from "react";

const Mfetch2 = ({ data,api,list,setlist,sethide }) => {
    const [getid,setid] = useState(data.id)
    const design = {
        heigh: '400px',
        width: '400px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transfrom: 'translate(-50%,-50%)',
        border: '2px solid red'
    }
    const [user, setuser] = useState(
        {
            first_name: "",
            last_name: "",
            number: "",

        }
    )
    useEffect(() => {
        setuser({
            first_name: data.first_name,
            last_name: data.last_name,
            number: data.number,

        })
    }, [data])
    const save = async(e)=>{
        e.preventDefault();
       try {
           const res = await fetch(`${api}/${getid}`,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(user)               
           });

           const updated = await res.json();
            sethide(false)
           setlist(list.map((ech)=>{return ech.id == getid ? updated : ech }))
           setuser(  {
            first_name: "",
            last_name: "",
            number: "",

        })

       } catch (error) {
         throw error; 
       }
    }
    const change = (e)=>{
        setuser({...user,[e.target.name]:e.target.value})
    }
    return (
        <div style={design}>
            <input placeholder="first_name" name="first_name" value={user.first_name} type="text" onChange={change}/>
            <br></br>
            <input placeholder="last_name" name="last_name" value={user.last_name} type="text" onChange={change} />
            <br></br>
            <input placeholder="number" name="number" value={user.number} type="number" onChange={change} />
            <br></br>
            <button onClick={save} >SAVE</button>


        </div>
    );
}
export default Mfetch2;