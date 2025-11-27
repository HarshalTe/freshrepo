import { useState } from "react";

const Complexdropdown = () => {

  const [fruit, setFruit] = useState(["mango", "banana", "chikoo", "gua"]);
  const [colour, setColour] = useState(["red", "yellow", "brown", "green"]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const [newFruit, setNewFruit] = useState("");
  const [newColour, setNewColour] = useState("");

  // When selecting fruit to update
  const handleSelect = (e) => {
    const index = e.target.value;

    if (index === "") return;

    setSelectedIndex(Number(index));  // IMPORTANT FIX 🔥

    setNewFruit(fruit[index]);
    setNewColour(colour[index]);
  };

  // Create new fruit
  const handleCreate = () => {
    if (!newFruit || !newColour) return alert("Enter both fruit & colour");

    setFruit([...fruit, newFruit]);
    setColour([...colour, newColour]);

    setNewFruit("");
    setNewColour("");
  };

  // Update existing fruit using map()
  const handleUpdate = () => {
    if (selectedIndex === null) return alert("Select a fruit to update");

    const updatedFruit = fruit.map((item, index) =>
      index === selectedIndex ? newFruit : item
    );

    const updatedColour = colour.map((item, index) =>
      index === selectedIndex ? newColour : item
    );

    setFruit(updatedFruit);
    setColour(updatedColour);

    setSelectedIndex(null);
    setNewFruit("");
    setNewColour("");
  };

  return (
    <>
      <h1>DROPDOWN  🔥🚗🔥🔥🏆🔥🔥🔥 + CREATE + UPDATE</h1>

      {/* Select existing fruit to update */}
      <select onChange={handleSelect}>
        <option value="">Select fruit to edit</option>
        {fruit.map((f, i) => (
          <option key={i} value={i}>{f}</option>
        ))}
      </select>

      <br /><br />

      {/* Input to create or update */}
      <input
        placeholder="Enter fruit"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />

      <input
        placeholder="Enter colour"
        value={newColour}
        onChange={(e) => setNewColour(e.target.value)}
      />

      <br /><br />

      <button onClick={handleCreate}>Create</button>
      <button onClick={handleUpdate}>Update</button>

      <br /><br />

      <h3>Fruit List</h3>
      {fruit.map((f, i) => (
        <p key={i}>
          {f} — {colour[i]}
        </p>
      ))}
    </>
  );
};

export default Complexdropdown;




// import { useState } from "react";

// const Complexdropdown = () => {

//   const [fruit, setFruit] = useState(["mango", "banana", "chikoo", "gua"]);
//   const [colour, setColour] = useState(["red", "yellow", "brown", "green"]);

//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const [newFruit, setNewFruit] = useState("");
//   const [newColour, setNewColour] = useState("");

//   // When selecting fruit to update
//   const handleSelect = (e) => {
//     const index = e.target.value;
//     if (index === "") return;

//     setSelectedIndex(index);
//     setNewFruit(fruit[index]);
//     setNewColour(colour[index]);
//   };

//   // Create new fruit
//   const handleCreate = () => {
//     if (!newFruit || !newColour) return alert("Enter both fruit & colour");

//     setFruit([...fruit, newFruit]);
//     setColour([...colour, newColour]);

//     setNewFruit("");
//     setNewColour("");
//   };

//   // Update existing fruit
// //   const handleUpdate = () => {
// //     if (selectedIndex === null) return alert("Select a fruit to update");

// //     const updatedFruit = [...fruit];
// //     const updatedColour = [...colour];

// //     updatedFruit[selectedIndex] = newFruit;
// //     updatedColour[selectedIndex] = newColour;

// //     setFruit(updatedFruit);
// //     setColour(updatedColour);

// //     setSelectedIndex(null);
// //     setNewFruit("");
// //     setNewColour("");
// //   };


//   const handleUpdate = () => {
//     if (selectedIndex === null) return alert("Select a fruit to update");

//     const updatedFruit = fruit.map((item, index) =>
//       index === selectedIndex ? newFruit : item
//     );

//     const updatedColour = colour.map((item, index) =>
//       index === selectedIndex ? newColour : item
//     );

//     setFruit(updatedFruit);
//     setColour(updatedColour);

//     setSelectedIndex(null);
//     setNewFruit("");
//     setNewColour("");
//   };


//   return (
//     <>
//       <h1>DROPDOWN + CREATE + UPDATE</h1>

//       {/* Select existing fruit to update */}
//       <select onChange={handleSelect}>
//         <option value="">Select fruit to edit</option>
//         {fruit.map((f, i) => (
//           <option key={i} value={i}>{f}</option>
//         ))}
//       </select>

//       <br /><br />

//       {/* Input to create or update */}
//       <input
//         placeholder="Enter fruit"
//         value={newFruit}
//         onChange={(e) => setNewFruit(e.target.value)}
//       />

//       <input
//         placeholder="Enter colour"
//         value={newColour}
//         onChange={(e) => setNewColour(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={handleCreate}>Create</button>
//       <button onClick={handleUpdate}>Update</button>

//       <br /><br />

//       <h3>Fruit List</h3>
//       {fruit.map((f, i) => (
//         <p key={i}>
//           {f} — {colour[i]}
//         </p>
//       ))}
//     </>
//   );
// };

// export default Complexdropdown;
