import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"

export default (props) => {
    const { animals } = useContext(AnimalContext)

    return (
        <div className="animals">
            <h1>Animals</h1>
            <button onClick={() => props.history.push("/animals/create")}>
                Admit Animal
            </button>
            <article className="animalList">
            {animals.map(animal => {

    return <Animal key={animal.id}
                animal={animal} />
})}
            </article>
        </div>
    )
}