import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {su} from "././Redux/Newstartslice"
const Newstart2 = ({ setshowupdate, getid }) => {
    const { userlistdata } = useSelector((state) => state.crud2);
    const dis = useDispatch();
    const fill = userlistdata.find((ech, index) => {
        const pf = getid === ech.id;
        return pf;
    })
    const [getuserdata, setuserdata] = useState({
        first_name: fill.first_name,
        last_name: fill.last_name,
        number: fill.number,
    });

    const ch = (e)=>{
        setuserdata({...getuserdata,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        setuserdata({
            first_name: fill.first_name || "NA",
            last_name: fill.last_name || "NA",
            number: fill.number || "NA",
        })
    }, [getid])

    const design = {
        width: "300px",
        border: "2px solid red",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "transition(-50%,-50%)",

    }
    const submited = (e) => {
        e.preventDefault();
        dis(su({getid,getuserdata}));  
    }
    const cancel = () => {
        setshowupdate(false);
    }
    return (
        <div style={design}>
            <h1>UPDATE DATA</h1>
            <br />
            <input type="text" placeholder="First Name" name="first_name" value={getuserdata.first_name}  onChange={ch}/>
            <br />
            <input type="text" placeholder="Last Name" name="last_name" value={getuserdata.last_name}  onChange={ch}/>
            <br />
            <input type="number" placeholder="Phone Number" name="number" value={getuserdata.number} onChange={ch}/>
            <br />
            <button onClick={(e) => submited(e)}>SAVE</button>
            <br />
            <button onClick={cancel}>CANCEL</button>
        </div>
    );
}
export default Newstart2;