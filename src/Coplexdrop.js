import { useState } from "react";

const Complexdrop = () => {
  const [data, setdata] = useState([
    {
      name: "raman",
      last: "thakare",
      hobby: ["coding", "painting", "digitalart"],
      proffesion: {
        field: "it",
        subject: "computer-science",
        lang: [
          "java",
          "javascript",
          "c",
          "c++",
          55,
          88,
          "python",
          [
            "english",
            "hindi",
            "marathi",
            { education: "master-cs" }
          ]
        ]
      }
    }
  ]);

  return (
    <div>
      <h1>Map Data</h1>

      {data.map((ech, ei) => {
        return (
          <div key={ei}>
            <p>{ech.name}</p>
            <p>{ech.last}</p>

            {/* Hobby */}
            {ech.hobby.map((h, hi) => (
              <h1 key={hi}>{h}</h1>
            ))}

            <h3>{ech.proffesion.field}</h3>
            <h3>{ech.proffesion.subject}</h3>

            {/* Lang */}
            {ech.proffesion.lang.map((l, li) => {
              // 👉 string ya number hai toh directly show
              if (typeof l === "string" || typeof l === "number") {
                return <h4 key={li}>{l}</h4>;
              }

              // 👉 Agar value array ho (english, hindi, marathi…)
              if (Array.isArray(l)) {
                return (
                  <div key={li}>
                    {l.map((sub, si) => {
                      if (typeof sub === "string") {
                        return <h5 key={si}>{sub}</h5>;
                      }

                      // 👉 Agar object ho (education)
                      if (typeof sub === "object") {
                        return <p key={si}>{sub.education}</p>;
                      }
                    })}
                  </div>
                );
              }

              return null;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Complexdrop;
 