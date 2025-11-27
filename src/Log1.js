import { useState, useEffect } from "react";

const Log1 = () => {
  const [userdata, setuserdata] = useState({ email: "", password: "" });
  const [mydata, setmydata] = useState(null);

  // Load saved data from localStorage when component mounts
  useEffect(() => {
    const saved = localStorage.getItem("log");
    if (saved) {
      setmydata(JSON.parse(saved));
    }
  }, []);

  const change = (e) => {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const sub = () => {
    // Save data to localStorage
    localStorage.setItem("log", JSON.stringify(userdata));
    setmydata(userdata); // Show immediately
    setuserdata({ email: "", password: "" }); // Clear input fields
  };

  const clearData = () => {
    localStorage.removeItem("log"); // Remove saved data
    setmydata(null); // Clear display
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Email"
        name="email"
        value={userdata.email}
        onChange={change}
        style={{ marginBottom: "10px" }}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={userdata.password}
        onChange={change}
        style={{ marginBottom: "10px" }}
      />
      <br />

      <button onClick={sub} style={{ marginRight: "10px" }}>
        Login
      </button>
      <button onClick={clearData}>Clear Saved Data</button>

      {/* Show saved data from localStorage */}
      {mydata && (
        <div style={{ marginTop: "20px" }}>
          <h3>Saved Data:</h3>
          <p>Email: {mydata.email}</p>
          <p>Password: {mydata.password}</p>
        </div>
      )}
    </div>
  );
};

export default Log1;
