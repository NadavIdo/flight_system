import React from 'react'
import { Link} from 'react-router-dom'


const HomePlaceholder = () => {
  return (
    <div style={{ backgroundImage:`url({p1.png})` }}>

      <h1>Flight Company </h1>

      <p>
        <h4>The cheapest flight site in the world</h4>
        <br />
        <h4> Looking for a direct flight? Looking for a comfortable flight? Looking for a cheap flight?</h4>
        <br />

        <h4> So... Search your flight and buy now</h4>
        
      </p>

      <div class="row" >
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Eli Yehiav</h5>
        <p class="card-text">I completed a Full-Stack course, as part of the course I experienced developing web sites 
using Python, developed in a cloud environment with the most innovative methods available 
on the market and use new technology</p>
<Link to='flights' className="btn btn-info">Go buy now in my website</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Nadav Ido</h5>
        <p class="card-text">Hello everyone, my name is Nadav i'm 26 yers old and live in central Israel</p>
        <p>I recently completed a Full-Stack course.</p>
        <Link to='flights' className="btn btn-info">Go buy now in my website</Link>
      </div>
    </div>
  </div>
</div>
      <div class="card mb-3">
  
  <div class="card-body">
    <h2 class="card-title">Our proficiency:</h2>
    <p class="card-text"><h3>Python, Flask, Django, React, Redux, CSS, HTML, JSON,
       Jinja, Angular, SQL, 
MYSQL, Heroku, GitHub, JavaScript.</h3></p>
    <p class="card-text"><small class="text-muted"></small></p>
    <img src="p11.png" class="card-img-top" alt="..."/>
  </div>
  <div class="p-3 mb-2 bg-light text-dark text-center">
        <p>Contact us</p>
        <p class="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Email: eli.yehiav@gmail.com</p>
        <p>Email: nadavido95@gmail.com</p>
      </div>
</div>
      
    </div>

  )
}

export default HomePlaceholder