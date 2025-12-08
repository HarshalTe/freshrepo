import { useState } from "react";

const Mfetch3 = ({ setaddpopup, list, setlist, api }) => {
    const [form, setform] = useState({
        first_name: "",
        last_name: "",
        number: ""
    });

    const change = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    const add = async () => {
        try {
            const res = await fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            const result = await res.json();

            if (result.id) {
                setlist([...list, result]);
                setaddpopup(false);
            } else {
                console.log("Invalid response:", result);
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Add User</h2>

            <input
                name="first_name"
                placeholder="First Name"
                onChange={change}
            />

            <input
                name="last_name"
                placeholder="Last Name"
                onChange={change}
            />

            <input
                name="number"
                placeholder="Number"
                onChange={change}
            />

            <button onClick={add}>SAVE</button>
            <button onClick={() => setaddpopup(false)}>CLOSE</button>
        </div>
    );
};

export default Mfetch3;



// import { useState } from "react"

// const Mfetch3 = ({ setaddpopup, list, setlist, api }) => {

//     const [initional, setintional] = useState({
//         first_name: "",
//         last_name: "",
//         number: ""
//     })
//     const design = {
//         heigh: '400px',
//         width: '400px',
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transfrom: 'translate(-50%,-50%)',
//         border: '2px solid red'
//     }

//     const cancel = () => {
//         setaddpopup(false)
//     }

//     const change = (e) => {
//         setintional({ ...initional, [e.target.name]: e.target.value })
//     }
//     const sub = async () => {
//         try {
//             const res = await fetch(api, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(initional)
//             })
//             const result = await res.json()
//             setlist([...list, result])
//             setintional({
//                 first_name: "",
//                 last_name: "",
//                 number: ""
//             })
//         } catch (error) {
//             throw error;

//         }
//     }

//     return (
//         <div style={design}>
//             <input placeholder="first_name" name="first_name" onChange={change} value={initional.first_name} />
//             <br></br>
//             <input placeholder="last_name" name="last_name" onChange={change} value={initional.last_name} />
//             <br></br>
//             <input placeholder="number" name="number" onChange={change} value={initional.number} />
//             <br></br>
//             <button onClick={sub} >SUBMIT</button>
//             <button onClick={cancel}>CANCEL</button>


//         </div>
//     );
// }
// export default Mfetch3;