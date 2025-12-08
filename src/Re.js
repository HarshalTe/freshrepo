import { useEffect, useState } from "react";

const Re = () => {
    const api = 'https://67ab452f5853dfff53d6c917.mockapi.io/app/user'

    const [editId, setEditId] = useState(null);
    const [userdata, setuserdata] = useState({
        first_name: "",
        last_name: "",      
        number: ""
    });

    const [listdata, setlistdata] = useState([]);

    const showdata = async () => {
        try {
            const res = await fetch(api);
            const result = await res.json();
            setlistdata(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        showdata();
    }, []);

    const change = (e) => {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    };

    // ---------------- CREATE ----------------
    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(api, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userdata)
            });

            const result = await res.json();
            setlistdata([...listdata, result]);

            setuserdata({ first_name: "", last_name: "", number: "" });
        } catch (error) {
            console.log(error);
        }
    };

    // ---------------- UPDATE SEPARATE FUNCTION ----------------
    const updateUser = async () => {

        try {
            const res = await fetch(`${api}/${editId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userdata)
            });

            const updated = await res.json();

            setlistdata(
                listdata.map((item) =>
                    item.id === editId ? updated : item
                )
            );

            setEditId(null);
            setuserdata({ first_name: "", last_name: "", number: "" });

        } catch (error) {
            console.log(error);
        }
    };

    // Fill form for update
    const up = (item) => {
        setEditId(item.id);
        setuserdata({
            first_name: item.first_name,
            last_name: item.last_name,
            number: item.number,
        });
    };

    return (
        <div>
            <h1>CRUD APPLICATION</h1>

            <input placeholder="First Name" name="first_name" value={userdata.first_name} onChange={change} />
            <br />
            <input placeholder="Last Name" name="last_name" value={userdata.last_name} onChange={change} />
            <br />
            <input placeholder="Phone Number" name="number" value={userdata.number} onChange={change} />
            <br />

            <button onClick={submit}>SUBMIT</button>
            <button onClick={updateUser}>UPDATE USER</button>

            <br /><br />

            {listdata.map((ech, index) => (
                <div key={index}>
                    <h3>{ech.first_name} {ech.last_name}</h3>
                    <p>{ech.number}</p>

                    <button onClick={() => up(ech)}>UPDATE</button>
                </div>
            ))}
        </div>
    );
};

export default Re;
