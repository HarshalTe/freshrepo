import { useDispatch, useSelector } from "react-redux";
import { showdata ,postdata,remove,updatedata1} from '././Redux/Start1slice'
import { useEffect, useState } from "react";
const Start1 = () => {
    const [info, setinfo] = useState({ first_name: "", last_name: "", number: null });
    const [getid,setid] = useState(null)
    const change = (e) => {
        setinfo({ ...info, [e.target.name]: e.target.value })
    }
    const dis = useDispatch();
    const { userdata } = useSelector((state) => state.ss);
    useEffect(() => {
        dis(showdata())
    }, [])
    const submit = (e)=>{
      e.preventDefault();
       dis(postdata(info));
       setinfo({ first_name: "", last_name: "", number:"" })
    }
    const del =  (id)=>{
      dis(remove(id))
    }


const prefield = (id) => {
  const user = userdata.find((u) => u.id === id);
  if (user) {
    setid(id);
    setinfo({
      first_name: user.first_name,
      last_name: user.last_name,
      number: user.number,
    });
  }
  
};


const up = (getid)=>{
  dis(updatedata1({ info, getid }));
}


  

    return (
        <div>
            <h1>User Information</h1>
            <br />
            <input type="text" placeholder="First Name" name="first_name" value={info.first_name} onChange={change} />
            <br />
            <input type="text" placeholder="Last Name" name="last_name" value={info.last_name} onChange={change} />
            <br />
            <input type="number" placeholder="Number" name="number" value={info.number} onChange={change} />
            <br />
           {getid ? <button onClick={()=>up(getid)}>UPDATED</button> : <button onClick={submit}>SUBMIT</button>}
            <br/>
            {userdata.map((ech, i) => {
                return (
                    <div key={i}>
                        <h1>{ech?.first_name}</h1>
                        <br/>
                          <h1>{ech?.last_name}</h1>
                        <br/>
                          <h1>{ech?.number}</h1>
                        <br/>
                        <button onClick={()=>prefield(ech.id)}>UPDATE</button>
                        <br/>
                        <button onClick={()=>del(ech.id)}>DELETE</button>
                         <br/>

                    </div>
                )
            })}
        </div>
    );
}
export default Start1;