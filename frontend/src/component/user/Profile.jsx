import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { updatePassword, updateProfile, loadUser } from '../../redux/actions/UserAction' // Make sure to import the action
import { useAlert } from 'react-alert'

function Profile() {
  const dispatch = useDispatch()
  const { user, loading } = useSelector(state => state.auth);
  const navigate = useNavigate() // For Redirect
  const alert = useAlert()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [image, setImage] = useState()

  const updateProfileModalRef = useRef(null)

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setImage(user.image);
    }
  }, [user]);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    console.log(name, email, image)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('image', image)

    try {
      await dispatch(updateProfile(formData))
      await dispatch(loadUser())
      const modalInstance = bootstrap.Modal.getInstance(updateProfileModalRef.current)
      modalInstance.hide()
      navigate('/profile', { replace: true })
    } catch (error) {
      console.error('Profile update failed', error)
    }
  }

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    const oldPassword = e.target.oldPassword.value
    const newPassword = e.target.newPassword.value
    const confirmPassword = e.target.confirmPassword.value

    try {
      await dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
      
    } catch (error) {
      console.error('Password update failed', error);
      alert.error(error.response.data.message); // Display error message using alert
    }

  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center mt-5 mb-4">
              <img
                src={user?.image?.url}
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ width: '150px', height: '150px' }}
              />
              <h1 className="mt-3">{user?.name}</h1>
              <p className="lead">{user?.email}</p>
            </div>
            <div className="text-center">
              <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#updateProfile">Update Profile</button>
              <button className="btn btn-dark ms-2" data-bs-toggle="modal" data-bs-target="#changePassword">Change Password</button>
            </div>
          </div>
        </div>

        {/* Update Profile Modal */}
        <div className="modal fade" id="updateProfile" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={updateProfileModalRef}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Profile Update</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleProfileUpdate}>
                  <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image">Image</label>
                    <input type="file"
                      name="image"
                      className="form-control"
                      onChange={(e) => setImage(e.target.files[0])} />
                    {user?.image?.url && <img src={user?.image?.url} alt="profile-image" width="50px" />}
                  </div>
                  <button type="submit" className="btn btn-dark">Update Profile</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Change Password Modal */}
        <div className="modal fade" id="changePassword" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Update Password</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handlePasswordUpdate}>
                  <div className="mb-3">
                    <label htmlFor="">Old Password</label>
                    <input type="password" name="oldPassword" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">New Password</label>
                    <input type="password" name="newPassword" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control" required />
                  </div>
                  <button type="submit" className="btn btn-dark">Update Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
