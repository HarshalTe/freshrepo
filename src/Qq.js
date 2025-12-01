import { useState } from "react";
import { Qq1 } from "./Qu1";

const Qq = () => {
    const [drop,setdrop] = useState(['one','two','three','four'])
    const [selectvalue,setselectvalue] = useState();

  const [result, setResult] = useState(0);

  const handleClick = () => {
    const c = Qq1(50, 40);
    setResult(c);
  };

  const change = (e)=>{
     setselectvalue(e.target.value);
  }

  return (
    <div>
      <h1>{result}</h1>
      <button onClick={handleClick}>button</button>
       <br></br>
       <select onChange={change} >
              <option value=''>select number</option>
           {drop.map((e,i)=>{
                   
                   return(
                       <div>
                           <option value={e}>{e}</option>
                       </div>
                   );
           })}
       </select>
       <br></br>
       <h1>{selectvalue}</h1>
    </div>
  );
};

export default Qq;
  