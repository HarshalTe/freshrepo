import { useEffect, useState } from "react";

const Fetch = () => {
  const api = "https://67ab452f5853dfff53d6c917.mockapi.io/app/user";

  const [list, setlist] = useState([]);
  const [getid, setid] = useState(null);
  const [userdata, setuserdata] = useState({
    first_name: "",
    last_name: "",
    number: ""
  });

  const showdata = async () => {
    try {
      const res = await fetch(api);
      const result = await res.json();
      setlist(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showdata();
  }, []);

  const update = (item) => {
    setid(item.id);
    setuserdata({
      first_name: item.first_name,
      last_name: item.last_name,
      number: item.number
    });
  };

  const change = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const save = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/${getid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdata)
      });

      const result = await res.json();

      setlist(
        list.map((item) => (item.id === getid ? result : item))
      );

      setuserdata({ first_name: "", last_name: "", number: "" });
      setid(null);
    } catch (error) {
      console.log(error);
    }
  };

  const add = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdata)
      });

      const result = await res.json();
      setlist([...list, result]);

      setuserdata({ first_name: "", last_name: "", number: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const del = async (item) => {
    try {
      await fetch(`${api}/${item.id}`, { method: "DELETE" });

      setlist(list.filter((x) => x.id !== item.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{api}</h1>

      <input type="text" name="first_name" placeholder="first_name" value={userdata.first_name} onChange={change} />
      <input type="text" name="last_name" placeholder="last_name" value={userdata.last_name} onChange={change} />
      <input type="number" name="number" placeholder="number" value={userdata.number} onChange={change} />

      <br />
      <button onClick={add}>ADD</button>
      <button onClick={save}>SAVE</button>

      {[...list]
        .sort((a, b) => Number(b.id) - Number(a.id))
        .map((item) => (
          <div key={item.id}>
            <b>{item.first_name}</b><br />
            <b>{item.last_name}</b><br />
            <b>{item.number}</b><br />
            <b>{item.id}</b><br />
            <button onClick={() => update(item)}>UPDATE</button>
            <button onClick={() => del(item)}>DELETE</button>
          </div>
        ))}
    </div>
  );
};

export default Fetch;




// import { useEffect, useState } from "react";

// const Fetch = () => {
//     const api = "https://67ab452f5853dfff53d6c917.mockapi.io/app/user";
//     const [list, setlist] = useState([]);
//     const [getid, setid] = useState(null);
//     const showdata = async () => {
//         try {
//             const res = await fetch(api)
//             const result = await res.json();
//             setlist(result)
//         } catch (error) {
//             throw error;
//         }
//     }
//     useEffect(() => { showdata() }, []);
//     const update = (item) => {
//         setid(item.id)
//         setuserdata({
//             first_name: item.first_name,
//             last_name: item.last_name,
//             number: item.number,
//         })
//     }
//     const [userdata, setuserdata] = useState({
//         first_name: "",
//         last_name: "",
//         number: ""
//     })
//     const change = (e) => {
//         setuserdata({ ...userdata, [e.target.name]: e.target.value });
//     }
//     const save = async (e) => {
//         e.preventDefault()
//         try {
//             const res = await fetch(`${api}/${getid}`, {
//                 method: "PUT",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(userdata)
//             })
//             const result = await res.json()
//             setlist(list.map((item) => {
//                return item.id === getid ? result : item
//             }))

//         } catch (error) {
//             throw error
//         }
//     }

//     const add = async(e)=>{
//       e.preventDefault();
//       try {
//         const res = await fetch(api,{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(userdata)
//         });
//         const result = await res.json()
   
//         setlist([...list, result]);

//       } catch (error) {
//            throw error;
//       }
//     }
//     const del = async(item)=>{
    
//        try {
//             const res = await fetch(`${api}/${item.id}`,{
//                 method:"DELETE",
//             });
          
//             setlist(list.filter((ech)=>{return ech.id !== item.id}))

//        } catch (error) {
//         throw error
//        }
        
//     }

 
//     return (
//         <div>
//             <h1>{api}</h1>
//             <input type="text" placeholder="first_name" name="first_name" onChange={change} value={userdata.first_name} />
//             <input type="text" placeholder="last_name" name="last_name" onChange={change} value={userdata.last_name} />
//             <input type="number" placeholder="number" name="number" onChange={change} value={userdata.number} />
//             <br></br>
//             <button onClick={add}>ADD</button>
//             <br></br>
//             <button onClick={save}>SAVE</button>

//             {[...list].sort((a, b) => { return b.id - a.id}).map((item) => {
//                 return (
//                     <div key={item.id}>
//                         <b>{item.first_name}</b>
//                         <br></br>
//                         <b>{item.last_name}</b>
//                         <br></br>
//                         <b>{item.number}</b>
//                         <br></br>
//                         <b>{item.id}</b>
//                         <br></br>
//                         <button onClick={() => update(item)}>UPDATE</button>
//                         <br></br>
//                         <button onClick={()=>del(item)} >DELETE</button>
//                     </div>
//                 );
//             })}


//         </div>
//     );
// }
// export default Fetch;