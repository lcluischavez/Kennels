import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import Employee from "./Employee"
import "./Employees.css"

export default (props) => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)


    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employeeList">
            {
                employees.map(employee => {
                    const clinic = locations.find(e => e.id === employee.locationId)
            
                    return <Employee key={employee.id}
                                    location={clinic}
                                    employee={employee} />
                })
            }
            </article>
        </div>
    )

    
}

