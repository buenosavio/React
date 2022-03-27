import { useContext } from "react";
import { CountContext } from "../context/CountContext";
import { NameContext } from "../context/NameContext";

const Mirror = () => {
    const {count} = useContext(CountContext);
    const {name} = useContext(NameContext);
    return (
        <>
        <h1>espelho: {count} </h1>
        <h1>nome: {name}</h1>
        </>
    )
}

export default Mirror;