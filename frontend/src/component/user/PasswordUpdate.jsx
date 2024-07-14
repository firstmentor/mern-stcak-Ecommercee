import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword, clearErrors } from '../../redux/actions/UserAction';

function PasswordUpdate() {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const { message, error } = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updatePassword(oldPassword, newPassword, confirmPassword));
    };

    const handleClearErrors = () => {
        dispatch(clearErrors());
    };

    return (
        <div className='container'>
            <h2>Update Password</h2>
            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                <div className="form-outline flex-fill mb-0 ">
                    <label className="form-label">Old Password:</label>
                    <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="form-control" 
                        required
                    />
                </div>
                <div>
                    <label className="form-label">New Password:</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="form-control" 
                        required
                    />
                </div>
                <div>
                    <label className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-control" 
                        required
                    />
                </div>
                <button type="submit" className="btn btn-dark my-4">Update Password</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && (
                <div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <button onClick={handleClearErrors}>Clear Errors</button>
                </div>
            )}
        </div>
    )
}

export default PasswordUpdate