import React, { useState } from "react";

const AutoRemoveDropdown = () => {

  const options = ["HTML", "CSS", "JavaScript", "React", "Node", "MongoDB"];

  const [isOpen, setIsOpen] = useState(false);
  const [tempSelect, setTempSelect] = useState([]);
  const [finalList, setFinalList] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Normal click toggle select / unselect
  const toggleSelect = (value) => {
    if (tempSelect.includes(value)) {
      setTempSelect(tempSelect.filter(item => item !== value));
    } else {
      setTempSelect([...tempSelect, value]);
    }
  };

  // Add to final list
  const addItems = () => {
    const unique = tempSelect.filter(item => !finalList.includes(item));
    setFinalList([...finalList, ...unique]);
    setTempSelect([]);
    setIsOpen(false);   // dropdown close after add
  };
   
  return (
    <div style={{ padding: "20px", width: "250px" }}>
      <h2>Custom Multi Select Dropdown</h2>

      {/* Dropdown box */}
      <div
        onClick={toggleDropdown}
        style={{
          border: "1px solid black",
          padding: "8px",
          cursor: "pointer",
          background: "#f5f5f5"
        }}
      >
        Select Skills ▼
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div style={{
          border: "1px solid gray",
          padding: "5px"
        }}>
          {options.map((item, i) => (
            <div
              key={i}
              onClick={(e) => {
                e.stopPropagation(); // dropdown close hone se roke
                toggleSelect(item);
              }}
              style={{
                padding: "5px",
                cursor: "pointer",
                background: tempSelect.includes(item)
                  ? "#b6d9ff"
                  : "transparent"
              }}
            >
              {item}
            </div>
          ))}

          <button
            onClick={(e) => {
              e.stopPropagation();
              addItems();
            }}
            style={{ marginTop: "5px", width: "100%" }}
          >
            ADD
          </button>
        </div>
      )}

      <h3>Final Selected</h3>
      <ul>
        {finalList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoRemoveDropdown;
