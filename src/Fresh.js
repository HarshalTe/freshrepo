import { useSelector,useDispatch} from "react-redux";
import Freshslice from "././Redux/Freshslice"
import{userdata1} from "././Redux/userdata1"
import { useEffect, useState } from "react";
const Fresh = ()=>{ 
    const {userdata} = useSelector((state)=>state.user);
    const [list,setlist] = useState(userdata);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(userdata1())
    },[])
    return(
        <div>

          {list.map((ech,i)=>{
            return(
                <div>
                     <h1>{ech.name}</h1>

                </div>
            );
          })}

        </div>
    );
}