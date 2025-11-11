import { useDispatch, useSelector } from "react-redux";
import { showdata ,postdata,remove} from '././Redux/Start1slice'
import { useEffect, useState } from "react";
const Start1 = () => {
    const [info, setinfo] = useState({ first_name: "", last_name: "", number: null });
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
    }
    const del =  (id)=>{
      dis(remove(id))
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
            <button onClick={submit}>SUBMIT</button>
            <br/>
            {userdata.map((ech, i) => {
                return (
                    <div key={i}>
                        <h1>{ech?.first_name}</h1>
                        <button onClick={()=>del(ech.id)}>DELETE</button>
                    </div>
                )
            })}
        </div>
    );
}
export default Start1;