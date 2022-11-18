import { useEffect, useState } from "react";

function Main (props) {

    const [parts, setParts] = useState([]);

    useEffect( () => {
        async function fetchData() {
            const response = await fetch("http://localhost:4000/autoparts")
            const records = await response.json()

            setParts(records)
        }

        fetchData();

    }, [] )

    return (
        <div id="main">
            <h1>MAIN COMPONENT</h1>
            <div id="parts">
            {parts.map((part)=>{
                return <p> {part.part_name} {part.price} </p>;
            })}
            </div>
        </div>
    )
}

export default Main;