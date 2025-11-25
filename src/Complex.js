import { useState } from "react";

const Complex = () => {

    const [list, setlist] = useState([])
    const [getid,setid] = useState(null);
    const [username, setusername] = useState({
        person: "",
        hobbies: [
            {
                hobbiname: "",
                fevsub: [],
                fevfood: {
                    foodname: "",
                    otherfood: [],
                    bestfriends: {
                        bestfriendname: "",
                        otherfriends: []
                    }
                }
            },
        ]
    });

    const changename = (e) => {
        setusername({ ...username, [e.target.name]: e.target.value })
    }

    const chanhehobbiname = (e) => {
        const h = [...username.hobbies]
        h[0].hobbiname = e.target.value;
        setusername({ ...username, hobbies: h });
    }

    const changefevsub = (e) => {
        const h = [...username.hobbies];
        h[0].fevsub = e.target.value.split(",");
        setusername({ ...username, hobbies: h });
    };

    const changefoodname = (e) => {
        const h = [...username.hobbies]
        h[0].fevfood.foodname = e.target.value
        setusername({ ...username, hobbies: h });
    }

    const changeotherfood = (e) => {
        const h = [...username.hobbies]
        h[0].fevfood.otherfood = e.target.value.split(",");
        setusername({ ...username, hobbies: h });
    }

    const changebestfriendname = (e) => {
        const h = [...username.hobbies]
        h[0].fevfood.bestfriends.bestfriendname = e.target.value;
        setusername({ ...username, hobbies: h });
    }

    const otherfriends = (e) => {
        const h = [...username.hobbies]
        h[0].fevfood.bestfriends.otherfriends = e.target.value.split(",");
        setusername({ ...username, hobbies: h });
    }

    const sub = (e) => {
        e.preventDefault();
        setlist([...list, username]);
        setusername({
            person: "",
            hobbies: [
                {
                    hobbiname: "",
                    fevsub: [],
                    fevfood: {
                        foodname: "",
                        otherfood: [],
                        bestfriends: {
                            bestfriendname: "",
                            otherfriends: []
                        }
                    }
                },
            ]
        })
    }
     
 const up = (ech, i) => {
    setid(i)
    setusername({
        person: ech.person,
        hobbies: [
            {
                hobbiname: ech.hobbies[0].hobbiname,
                fevsub: ech.hobbies[0].fevsub,
                fevfood: {
                    foodname: ech.hobbies[0].fevfood.foodname,
                    otherfood: ech.hobbies[0].fevfood.otherfood,
                    bestfriends: {
                        bestfriendname: ech.hobbies[0].fevfood.bestfriends.bestfriendname,
                        otherfriends: ech.hobbies[0].fevfood.bestfriends.otherfriends
                    }
                }
            }
        ]
    });
};

const save = () => {
    const updated = [...list];
    updated[getid] = username;   // replace old data with current form data
    setlist(updated);

    // reset form + id
    setid(null);
    setusername({
        person: "",
        hobbies: [
            {
                hobbiname: "",
                fevsub: [],
                fevfood: {
                    foodname: "",
                    otherfood: [],
                    bestfriends: {
                        bestfriendname: "",
                        otherfriends: []
                    }
                }
            },
        ]
    });
};



// const save = () => {
//     const updated = list.map((item, index) =>
//         index === getid ? username : item
//     );

//     setlist(updated);

//     setid(null);  // reset update mode

//     setusername({
//         person: "",
//         hobbies: [
//             {
//                 hobbiname: "",
//                 fevsub: [],
//                 fevfood: {
//                     foodname: "",
//                     otherfood: [],
//                     bestfriends: {
//                         bestfriendname: "",
//                         otherfriends: []
//                     }
//                 }
//             },
//         ]
//     });
// };





    return (
        <div>
            <input name="person" value={username.person} onChange={changename} />
            <input name="hobbiname" value={username.hobbies[0].hobbiname} onChange={chanhehobbiname} />
            <input name="fevsub" value={username.hobbies[0].fevsub.join()} onChange={changefevsub} />
            <input name="foodname" value={username.hobbies[0].fevfood.foodname} onChange={changefoodname} />
            <input name="otherfood" value={username.hobbies[0].fevfood.otherfood.join()} onChange={changeotherfood} />
            <input name="bestfriendname" value={username.hobbies[0].fevfood.bestfriends.bestfriendname} onChange={changebestfriendname} />
            <input name="otherfriends" value={username.hobbies[0].fevfood.bestfriends.otherfriends.join()} onChange={otherfriends} />
            <br />
            <button onClick={sub}>SUBMIT</button>

            <br />

            {list.map((ech, i) => {
                return (
                    <div key={i}>
                        <h1>{ech.person}</h1>

                        {ech.hobbies.map((hb, hi) => (
                            <div key={hi}>
                                <h2>{hb.hobbiname}</h2>

                                {hb.fevsub.map((sub, si) => (
                                    <p key={si}>{sub}</p>
                                ))}

                                <p>{hb.fevfood.foodname}</p>

                                {hb.fevfood.otherfood.map((food, fi) => (
                                    <p key={fi}>{food}</p>
                                ))}

                                <p>{hb.fevfood.bestfriends.bestfriendname}</p>

                                {hb.fevfood.bestfriends.otherfriends.map((fr, fi) => (
                                    <p key={fi}>{fr}</p>
                                ))}

                            </div>
                        ))}
                          <button onClick={()=>up(ech,i)}>UPDATE</button>
                           <button onClick={()=>save()}>save</button>
                    </div>
                );
            })}

        </div>
    );
};

export default Complex;
