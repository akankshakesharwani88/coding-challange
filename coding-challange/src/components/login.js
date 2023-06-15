import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveToken } from '../redux/action/userAction';
import { getAuthToken } from '../utils/localstorage';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/thumbnails/Logo.svg';
import { updateProductList } from '../redux/action/userAction';

function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginPage = useSelector((state) => state.rootReducer);
  console.log('loginPage: ', loginPage);

  // useEffect(() => {
  //   // Fetch the JSON data here
  //   fetch('sample.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Dispatch the action to update the product list
  //       dispatch(updateProductList(data));
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching JSON data:', error);
  //     });
  // }, [dispatch]);

  // Rest of the component code


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Static token generation
    const token = 'your_static_token';

    // Save token in localStorage
    localStorage.setItem('token', token);

    // Save token in Redux store
    dispatch(saveToken(token));

    // Reset the email and password fields
    setEmail('');
    setPassword('');
  };

  // Check if token is present in localStorage
  const authToken = getAuthToken();

  if (authToken) {
    // Token is present, redirect to Product List page
     navigate("/Products")
  }

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
                        <div className="card_content_wrap text-center">
                          <div className="card_content_wrap text-center">
                            <div className="logo_wrap">
                              <img src={Logo} alt="logo" />
                              <h6>
                                Don’t have an account yet?
                                <a className="signUpSpan" href="/signup">
                                  Sign Up
                                </a>
                              </h6>
                            </div>
                            <form onSubmit={handleSubmit}>
                              <div className="form_wrapper">
                                <div className="mb-4">
                                  <label htmlFor="exampleFormControlInput1" className="form-label label_modify">
                                    <span className="mendatary">*</span> Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control input_modify"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    placeholder="demo@demo.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                  />
                                </div>
                                <div className="mb-4">
                                  <label htmlFor="exampleFormControlInput2" className="form-label label_modify">
                                    <span className="mendatary">*</span> Password
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control input_modify"
                                    name="password"
                                    id="exampleFormControlInput1"
                                    placeholder="********"
                                    value={password}
                                    onChange={handlePasswordChange}
                                  />
                                </div>
                                <div className="mb-0 auth_btn">
                                  <button type="submit" className="theme-btn-primary theme-btn">
                                    Sign In
                                  </button>
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
    </div>
  );
}

export default Login;
