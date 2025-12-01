import { useState } from "react";

const Postput2 = ({ pass, showval, setshowval, setshow }) => {

  const [drop] = useState(['one','two','three','four']);
  const [newVal, setNewVal] = useState(pass.value);


  const handleUpdate = (newValue, index) => {
    const updated = [...showval];
    updated[index] = newValue;
    setshowval(updated);
    setshow(false);
  };

  return (
    <div>

      <h2>UPDATE VALUE</h2>

      <select
        value={newVal}
        onChange={(e)=>setNewVal(e.target.value)}
      >
        <option value="">select Number</option>

        {drop.map((e,i)=>(
          <option key={i} value={e}>{e}</option>
        ))}
      </select>

      <button
        onClick={()=>handleUpdate(newVal, pass.index)}
      >
        SAVE UPDATE
      </button>

    </div>
  );
};

export default Postput2;
