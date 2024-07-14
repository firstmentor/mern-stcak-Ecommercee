import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/actions/UserAction'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { clearErrors } from '../../redux/actions/UserAction'

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const alert = useAlert()
  const { isAuthenticated, error } = useSelector((state) => state.auth)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submitHandler = (n) => {
    n.preventDefault();
    //console.log(email, password)
    dispatch(loginUser(email, password))
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      alert.success('Login successful !')
      navigate("/");
    }
  }, [error, alert, dispatch, isAuthenticated, navigate]);

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5">
            {/* Form Start */}
            <form onSubmit={submitHandler}>
              <div className="form-floating mb-3">
                <input 
                value={email}
                onChange={(n) => setEmail(n.target.value)}
                type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label  >Email address</label>
              </div>
              <div className="form-floating">
                <input 
                value={password}
                onChange={(n) => setPassword(n.target.value)}
                type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label >Password</label>
              </div>
              <div className="mt-3"> <button type='submit' className="btn btn-dark w-100">Login</button> <br />
                <Link to={'/register'}>
                  <button className="btn w-100">Register</button>
                </Link>

              </div>
            </form>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Login