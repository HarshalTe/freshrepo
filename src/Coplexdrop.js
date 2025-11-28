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
                lang: ["java", "javascript", "c", "c++",55,88, "python",
                    [
                        "english", "hindi", "marathi",
                        {
                            education: "master-cs"
                        }
                    ]
                ]

            }
        }
    ])
    return (
        <div>
            <h1>Map Data</h1>
            {data.map((ech, ei) => {
                return (
                    <div key={ei}>
                        <p>{ech.name}</p>
                        <p>{ech.last}</p>
                        {ech.hobby.map((h, hi) => {
                            return (
                                <div key={hi}>
                                    <h1 key={hi}>{h}</h1>
                                </div>
                            )

                        })}
                        <h3>{ech.proffesion.field}</h3>
                        <h3>{ech.proffesion.subject}</h3>
                        {ech.proffesion.lang.map((l, li) => {
                            if (typeof l === "string" || typeof l === "number" ) {
                                return <h4 key={li}>{l}</h4>;
                            }
                        })}
                    </div>
                );


            })}


        </div>
    );
}
export default Complexdrop;