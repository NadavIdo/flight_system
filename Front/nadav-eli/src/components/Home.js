import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { selectFlights} from '../slicers/FlightsSlice'
import { selectUser, setUser } from '../slicers/UserSlice'



const Home = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const flights = useSelector(selectFlights)


  return (
    <>

      <div className="p-3 mb-2 bg-light text-dark" >
      
      {/* <My_nav></My_nav> */}

        <Link to='/' className="btn btn-secondary">Home</Link>
        <Link to='flights' className="btn btn-secondary">FLIGHTS</Link>
        <Link to='adminpage' className="btn btn-secondary">Display users</Link>

        {user ? (
          <>
            <button onClick={() => dispatch(setUser(null))} className='btn btn-outline-dark'>LOGOUT</button>
            <h3>Hello {user.username}</h3>
          </>
        ) : (
          <>
            <Link to='login' className="btn btn-secondary">LOGIN</Link>
            <Link to='register' className="btn btn-secondary">REGISTER</Link>

          </>
        )}


      </div>


      














      <Outlet />
    </>
  )
}

export default Home
