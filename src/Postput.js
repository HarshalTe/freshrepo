import { useState } from "react";
import Postput2 from "./Postput2";

const Postput = () => {

  const [drop] = useState(['one','two','three','four']);
  const [selectval,setselectval] = useState("");
  const [showval,setshowval] = useState([]);
  const [pass,setpass] = useState(null);
  const [show,setshow] = useState(false);

  // ✅ SEPARATE FUNCTION
  const handleChange = (e) => {
    setselectval(e.target.value);
  };

  const create = ()=>{
    if(selectval){
      setshowval([...showval, selectval]);
      setselectval("");
    }
  };

  const up = (value,index)=>{
    setpass({ value,index });
    setshow(true);
  };

  return (
    <div>

      {/* ✅ function use ho raha hai */}
      <select value={selectval} onChange={handleChange}>
        <option value="">select Number</option>

        {drop.map((e,i)=>(
          <option key={i} value={e}>{e}</option>
        ))}
      </select>

      <button onClick={create}>CREATE</button>

      {showval.map((item,i)=>(
        <div key={i}>
          <h3>{item}</h3>
          <button onClick={()=>up(item,i)}>UPDATE</button>
        </div>
      ))}

      {show && (
        <Postput2
          showval={showval}
          setshowval={setshowval}
          setshow={setshow}
          pass={pass}
        />
      )}

    </div>
  );
};

export default Postput;
