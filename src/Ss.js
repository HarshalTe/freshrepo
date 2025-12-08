import { useEffect, useState } from "react";

const Ss = () => {
  const [list, setlist] = useState([]);
  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    number: "",
  });
  const [getid, setid] = useState(null);

  const api = "https://67ab452f5853dfff53d6c917.mockapi.io/app/user";

  const change = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const showdata = async () => {
    try {
      const res = await fetch(api);
      const result = await res.json();
      setlist(result);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    showdata();
  }, []);

  const save = async (id) => {
    try {
      const res = await fetch(`${api}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const result = await res.json();

      const index = list.findIndex((item) => item.id === id);

      if (index !== -1) {
        const temp = [...list];
        temp[index] = result;
        setlist(temp);
      }
      setuser({
        first_name: "",
        last_name: "",
        number: "",
      });
    } catch (error) {
      throw error;
    }
  };

  const update = (ele) => {
    const updated = list[ele];
    setuser({
      first_name: updated.first_name,
      last_name: updated.last_name,
      number: updated.number,
    });
    setid(ele);
  };
  
  // FIX: This function now correctly takes the API 'id' and the local 'index'.
  const del = async (id, index) => {
    try {
      // 1. Send DELETE request to API using the item's unique 'id'
      await fetch(`${api}/${id}`, {
        method: "DELETE",
      });

      // 2. Update local state by filtering out the item at the given 'index'
      const newList = list.filter((_, i) => i !== index);
      setlist(newList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Fetch Data</h1>

      <input
        type="text"
        name="first_name"
        value={user.first_name}
        onChange={change}
      />
      <input
        type="text"
        name="last_name"
        value={user.last_name}
        onChange={change}
      />
      <input
        type="number"
        name="number"
        value={user.number}
        onChange={change}
      />

      <br />

      {list.map((ech, ele) => {
        return (
          <div key={ech.id}> 
            <br /> <br />
            <h1>{ech.first_name}</h1>
            <h1>{ech.last_name}</h1>
            <h1>{ech.number}</h1>
            <h1>{ech.id}</h1>

            <button onClick={() => save(ech.id)}>Save</button>

            <button onClick={() => update(ele)}>Update</button>
            
            {/* FIX: Passing both ech.id for the API and ele (index) for the state update */}
            <button onClick={() => del(ech.id, ele)}>DELETE</button>
          </div>
        );
      })}
    </div>
  );
};

export default Ss;