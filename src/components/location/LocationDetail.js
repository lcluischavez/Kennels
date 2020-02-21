import React, { useContext } from "react"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { LocationContext } from "./LocationProvider"
import "./Locations.css"

export default (props) => {
    const { Locations, releaseLocation } = useContext(LocationContext)
    const { locations } = useContext(LocationContext)
    const { customers } = useContext(CustomerContext)

    /*
        This line of code will be explained in the next
        section of the chapter.
    */
    const chosenLocationId = parseInt(props.match.params.LocationId, 10)

    const Location = Locations.find(a => a.id === chosenLocationId) || {}
    const customer = customers.find(c => c.id === Location.customerId) || {}
    const location = locations.find(l => l.id === Location.locationId) || {}

    return (
        <section className="Location">
            <h3 className="Location__name">{ Location.name }</h3>
            <div className="Location__breed">{ Location.breed }</div>
            <div className="Location__location">Location: { location.name }</div>
            <div className="Location__owner">Customer: { customer.name }</div>
            <button className="btn--release"
            onClick={() => {
            releaseLocation(chosenLocationId)
                .then(() => {
                    props.history.push("/Locations")
                })
                }}
            >Release
            </button>
        </section>
    )

}