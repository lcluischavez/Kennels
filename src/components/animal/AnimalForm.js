import React, { useContext, useRef } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import "./Animals.css";

export default props => {
    const { addAnimal } = useContext(AnimalContext);
    const { locations } = useContext(LocationContext);
    const animalName = useRef("");
    const animalLocation = useRef(0);
    const animalBreed = useRef("");

    const constructNewAnimal = () => {
        const locationId = parseInt(animalLocation.current.value)
    
        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: animalName.current.value,
                breed: animalBreed.current.value,
                locationId: locationId

            }).then(() => props.history.push("/animals"))
        }
    }

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <div className="form-group">
                <label htmlFor="animalName">Animal name</label>
                <input
                    type="text"
                    id="animalName"
                    ref={animalName}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Animal name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="animalBreed">Animal breed</label>
                <input
                    type="text"
                    id="animalBreed"
                    ref={animalBreed}
                    className="form-control"
                    placeholder="Animal breed"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Assign to location</label>
                <select
                    defaultValue=""
                    name="location"
                    ref={animalLocation}
                    id="animalLocation"
                    className="form-control"
                >
                    <option value="0">Select a location</option>
                    {locations.map(e => (
                        <option key={e.id} value={e.id}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                onClick={evt => {
                    evt.preventDefault(); // Prevent browser from submitting the form
                    constructNewAnimal();
                }}
                className="btn btn-primary"
            >
                Save Animal
            </button>
        </form>
    );
};