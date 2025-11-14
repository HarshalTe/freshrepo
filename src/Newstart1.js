import { useSelector, useDispatch } from "react-redux";
import { show ,deletedata} from './Redux/Newstartslice'
import { useEffect, useState } from "react";
import  Newstart from "./Newstart"
import Newstart2 from "./Newstart2";
const Newstart1 = () => {
    const { userlistdata } = useSelector((state) => state.crud2);
    const [showpoup,setshowpoup] = useState(false);
    const [getid,setid] = useState(null);
    const [showupdate,setshowupdate] = useState(false);
    const dis = useDispatch();
    useEffect(() => {
        dis(show());
    }, []);
    const create = ()=>{
     setshowpoup(true);
     setshowupdate(false)
    }
    const del = (id)=>{
       dis(deletedata(id))
    }
    const updateprefield = (id)=>{  
        setid(id)
       setshowupdate(true);
       setshowpoup(false)

    }
    return (
        <div>
            <h1>USER DATA</h1>
            <br></br>
                <button onClick={create}>CREATE</button>
            <br></br>
            {
                userlistdata.map((ech, i) => {
                    return (
                        <div key={i}>
                            <h1>{ech.first_name}</h1>
                            <br></br>
                            <h1>{ech.last_name}</h1>
                            <br></br>
                            <h1>{ech.number}</h1>
                            <br/>
                            <button onClick={()=>del(ech.id)}>DELETE</button>
                            <br></br>
                            <button onClick={()=>updateprefield(ech.id)}>UPDATE</button>
                        </div>
                    );
                })
            }

            {showpoup && <Newstart setshowpoup={setshowpoup}     />}
          {showupdate &&  <Newstart2 setshowupdate={setshowupdate} getid={getid} />}

        </div>
    );
}
export default Newstart1;