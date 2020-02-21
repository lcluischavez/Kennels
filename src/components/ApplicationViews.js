import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import LocationList from "./location/LocationList";
import AnimalList from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import CustomerList from "./customer/CustomerList";
import EmployeeProvider from "./employee/EmployeeProvider";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
import AnimalForm from "./animal/AnimalForm";
import AnimalDetails from "./animal/AnimalDetail";
import { MedicationProvider } from "./medication/MedicationProvider";
import MedicationForm from "./medication/MedicationForm";


export default (props) => {
    return (
        <>
            <AnimalProvider>
                <LocationProvider>
                    <MedicationProvider>
                        <Route exact path="/">
                            <LocationList />
                        </Route>
                        <Route exact path="/medications/create">
                            <MedicationForm />
                        </Route>
                    </MedicationProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>

                    <Route exact path="/employees" render={
                        props => <EmployeeList {...props} />
                    } />

                    <Route path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                    } />
                </LocationProvider>
            </EmployeeProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                        } />
                        <Route exact path="/animals/create" render={
                            props => <AnimalForm {...props} />
                        } />
                        <Route path="/animals/:animalId(\d+)" render={
                            props => <AnimalDetails {...props} />
                        } />
                        <Route path="/animals/edit/:animalId(\d+)" render={
                            props => <AnimalForm {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}