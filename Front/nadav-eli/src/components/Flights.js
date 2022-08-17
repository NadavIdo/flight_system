import axios from 'axios'
import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { selectFlights, setFlights } from '../slicers/FlightsSlice'
import { selectUser } from '../slicers/UserSlice'
import { Link, Outlet } from 'react-router-dom'

export const Flights = () => {
    const flights = useSelector(selectFlights)
    const user = useSelector(selectUser)
    const dispatch= useDispatch()
    
useEffect(() => {
    async function getFlights(){
        let config = {headers:{'Content-Type':'application/json'}};
        axios.get('http://127.0.0.1:8000/getflights/',config).then((response)=>{
        console.log(response.data)
        dispatch(setFlights(response.data))
        })
    }
    if(flights.length===0){
    getFlights();}
    }, [flights])
  return (
    <div>
<table className='table table-bright table-striped'>
    <thead>
        <tr >
        <th>Id</th>
        <th>From</th>
        <th>To</th>
        <th>Airline</th>
        <th>Departure</th>
        <th>At</th>
        <th>Arrival</th>
        <th>Land</th>
        <th>Tickets</th>
    </tr>
    </thead>
    <tbody>
{flights.map((flight , index)=>{
    return(
        <tr key={index}>
            <td>{flight.id}</td>
            <td>{flight.from}</td>
            <td>{flight.too}</td>
            <td>{flight.airline}</td>
            <td>{flight.dep_date}</td>
            <td>{flight.dep_time}</td>
            <td>{flight.arrival_date}</td>
            <td>{flight.arrival_time}</td>
            <td>{flight.tickets}</td>
            {user ? (
                <Link to='/buy' className='btn btn-outline-dark'>Buy</Link>
            ):('')}
        </tr>
    )
})


}

    </tbody>
</table>









    </div>
  )
}
export default Flights