import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../redux/actions/UserAction'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { clearErrors } from '../../redux/actions/UserAction'

function Registration() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const alert = useAlert()
  const { isAuthenticated, error } = useSelector((state) => state.auth)

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [image, setImage] = useState()

  const submitHandler = (n) => {
    n.preventDefault();
    console.log(name, email, password, confirmPassword, image)
    const formData = new FormData()
    formData.append('n', name)
    formData.append('e', email)
    formData.append('p', password)
    formData.append('cp', confirmPassword)
    formData.append('image', image)

    dispatch(createUser(formData))
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{ borderRadius: " 25px;" }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                  {/* Form */}
                  <form className="mx-1 mx-md-4" onSubmit={submitHandler}>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0 ">
                        <label className="form-label" >Your Name</label>
                        <input
                          value={name}
                          onChange={(n) => setName(n.target.value)}
                          type="text" id="form3Example1c" className="form-control" required />

                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label"  >Your Email</label>
                        <input
                          value={email}
                          onChange={(n) => setEmail(n.target.value)}
                          type="email" id="form3Example3c" className="form-control" required />

                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label"  >Password</label>
                        <input
                          value={password}
                          onChange={(n) => setPassword(n.target.value)}
                          type="password" id="form3Example4c" className="form-control" required />

                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label"  >Confirm Password</label>
                        <input
                          value={confirmPassword}
                          onChange={(n) => setConfirmPassword(n.target.value)}
                          type="password" id="form3Example4cd" className="form-control" required />

                      </div>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" />
                      <label className="form-check-label"  >
                        I agree all statements in <a href="#!">Terms of service</a>
                      </label>
                    </div>

                    {/* Image */}
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i class="fa-solid fa-image me-3 fa-lg fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label"  >Image</label>
                        <input
                          onChange={(n) => setImage(n.target.files[0])}
                          type="file" id="image" className="form-control" required />

                      </div>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg">Register</button>
                    </div>

                  </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration