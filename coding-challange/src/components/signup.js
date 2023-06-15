import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/thumbnails/Logo.svg';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../redux/action/userAction';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log('Form submitted!');
        e.preventDefault();


    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      email,
      password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    dispatch(saveUserData(userData));
    navigate('/');
  };

  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="assets/css/main.css" />
        <div className="App">
          <div id="wrapper">
            <div className="page-wrapper auth_wrapper">
              <div className="content-area-wrapper">
                <div className="content-wrapper">
                  <div className="container">
                    <div className="card products_blc">
                      <div className="card-body">
                        <div className="card_content_wrap text-center" />
                        <div className="card_content_wrap text-center">
                          <div className="logo_wrap">
                            <img src={Logo} alt="logo" />
                            <h6>Create an account</h6>
                          </div>
                          <form onSubmit={handleSubmit}>
                            <div className="form_wrapper">
                              <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label label_modify">
                                  <span className="mendatary">*</span> Email
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="demo@gmail.com"
                                  className="form-control input_modify"
                                  id="exampleFormControlInput1"
                                  value={email}
                                  onChange={handleEmailChange}
                                />
                              </div>
                              <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label label_modify">
                                  <span className="mendatary">*</span> Password
                                </label>
                                <input
                                  type="password"
                                  placeholder="*****"
                                  name="password"
                                  className="form-control input_modify"
                                  id="exampleFormControlInput2"
                                  value={password}
                                  onChange={handlePasswordChange}
                                />
                              </div>
                              <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label label_modify">
                                  <span className="mendatary">*</span>Confirm Password
                                </label>
                                <input
                                  type="password"
                                  name="confirmpassword"
                                  className="form-control input_modify"
                                  id="exampleFormControlInput3"
                                  placeholder="*****"
                                  value={confirmPassword}
                                  onChange={handleConfirmPasswordChange}
                                />
                              </div>
                              <div className="mb-0 auth_btn">
                                <button type="submit" className="theme-btn-primary theme-btn">
                                  Sign Up
                                </button>
                              </div>
                              <div className="already">
                                <a href="login.html">Already have Account</a>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
