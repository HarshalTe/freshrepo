import { useState } from "react";

const Nestedarray = () => {

  const [arr] = useState([["harshal","harshal2"],
    [
      "11111",
      "222222",
      [
        "3333",
        "4444",
        [
          "55555",
          "66666",
          [
            "8888",
            "9999"
          ]
        ]
      ]
    ]
  ]);

  return (
    <div>
      <h2>Nested Array Data</h2>

      {arr.map((l1, i1) => (
        <div key={i1}>
          
          {l1.map((l2, i2) => {

            // string values
            if (!Array.isArray(l2)) {
              return <div key={i2}>{l2}</div>;
            }

            // nested array
            return (
              <div key={i2} style={{ marginLeft: "20px" }}>
                {l2.map((l3, i3) => {

                  if (!Array.isArray(l3)) {
                    return <div key={i3}>{l3}</div>;
                  }

                  return (
                    <div key={i3} style={{ marginLeft: "20px" }}>
                      {l3.map((l4, i4) => {

                        if (!Array.isArray(l4)) {
                          return <div key={i4}>{l4}</div>;
                        }

                        return (
                          <div key={i4} style={{ marginLeft: "20px" }}>
                            {l4.map((l5, i5) => (
                              <div key={i5}>{l5}</div>
                            ))}
                          </div>
                        );

                      })}
                    </div>
                  );

                })}
              </div>
            );

          })}

        </div>
      ))}

    </div>
  );
};

export default Nestedarray;
