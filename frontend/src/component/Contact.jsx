import React from 'react'

function Contact() {
  return (
    <div>
  
  {/* breadcrumb start */}
      <div className="container-fluid">
       <div className="row px-xl-5">
        <div className="col-lg-12">
            <nav className="breadcrumb bg-white mb-3 p-3">
                <a href="#" className="breadcrumb-item text-dark aa">Home</a>
            <span className="breadcrumb-item active">Contact</span>
            </nav>
        </div>
       </div>
      </div>
    {/* contact start */}
    <div className="container-fluid">   
         <h2 className="text-uppercase mx-xl-5">Contact <hr/></h2>
        <div className="row px-xl-5">
        <div className="col-lg-7 mb-5 bg-white ">
           <div className="px-2 mb-3">
            <input type="text" placeholder="Your Name" className="form-control rounded-0 mt-4"/>
           </div>
           <div className="px-2 mb-3">
            <input type="email" placeholder="Your Email" className="form-control rounded-0"/>
           </div>
           <div className="px-2 mb-3">
            <input type="text" placeholder="Subject" className="form-control rounded-0"/>
           </div>
           <div className="px-2 mb-3">
             <textarea className="form-control rounded-0" rows="6" placeholder="Meassage"></textarea>
           </div>
           <div className="px-2 mb-2">
           <button className="btn btn-warning rounded-0">Send Message</button>
           </div>
        </div>
        <div className="col-lg-5 mb-5">
        <div className="bg-white p-4 mb-3">
                <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3024.195431214591!2d-74.0110605!3d40.71371409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1699705208279!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="bg-white p-4 mb-2">
                <p className="mb-2">
                    <i className="fa-solid fa-location-dot text-warning me-3"></i>
                    123 Street, New York, USA
                </p>
                <p className="mb-2">
                    <i className="fa-solid fa-envelope text-warning me-3"></i>
                    info@example.com
                </p>
                <p className="mb-0">
                    <i className="fa-solid fa-phone text-warning me-3"></i>
                    +913 127 8917
                </p>
            </div>
        </div>
        </div>
    </div>

    </div>
  )
}

export default Contact