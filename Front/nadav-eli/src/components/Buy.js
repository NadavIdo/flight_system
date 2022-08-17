import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const buy = () => {
  return (
    <div>
     <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
            <div className="card card-5">
                <div className="card-heading">
                    <h2 className="title">Buy safely</h2>
                </div>
                <div className="card-body">
                    <div>
                        <div className="form-row m-b-55">
                            <div className="name">first name</div>
                            <div className="value">
                                <div className="row row-space">
                                    <div className="col-2">
                                        <div className="input-group-desc">
                                            <input className="input--style-5" type="text" id="first_name"></input>
                                            <label className="label--desc" ></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">last name</div>
                            <div className="value">
                                <div className="input-group">
                                    <input className="input--style-5" type="text" id="last name<" ></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">card Number</div>
                            <div className="value">
                                <div className="input-group">
                                    <input className="input--style-5" type="password" id="password" ></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="name">Email</div>
                            <div className="value">
                                <div className="input-group">
                                    <input className="input--style-5" type="email" id="email"></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-row m-b-55">
                            <div className="name">Phone</div>
                            <div className="value">
                                <div className="row row-refine">
                                    <div className="col-9">
                                        <div className="input-group-desc">
                                            <input className="input--style-5" type="text" id="phone"></input>
                                            <label className="label--desc"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to='/' className='btn btn-outline-dark'>buy</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>    

    </div>
 
  )
}

export default buy