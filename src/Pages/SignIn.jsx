import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../store/authSlice';
import { useNavigate, Link } from 'react-router-dom';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault(); // Formun otomatik gönderimini engeller
    // Oturum açma işlemi başarılıysa
    dispatch(logIn());
    navigate('/'); // Oturum açtıktan sonra ana sayfaya yönlendir
  };

  return (
    <div>
      <div className="eblog-breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <div className="meta">
                  <Link to="/" className="prev">Home</Link>
                  <img src="/images/icon/chevron-right.svg" alt=""/>
                  <Link to="/signin" className="eblog-dropdown-main-element">Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="eblog-sign-up-area tp-section-gap">
        <div className="container">
          <div className="section-inner">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-8">
                <h2 className="heading-title text-center">Sign In</h2>
                <form onSubmit={handleSignIn}>
                  <div className="form-inner inner">
                    <div className="single-input-wrapper">
                      <input type="email" name="email" placeholder="Your email" required/>
                    </div>
                    <div className="single-input-wrapper">
                      <input type="password" name="password" placeholder="Password" required/>
                    </div>
                    <div className="single-input-wrapper check two">
                      <div className="check-inner">
                        <input type="checkbox" id="terms" name="terms" value="terms of use"/>
                        <label htmlFor="terms"> Remember me</label><br/>
                      </div>
                      <Link to="/reset-password" className="forgot-password">Forgot password?</Link>
                    </div>
                    <div className="single-input-wrapper">
                      <button type="submit" className="subscribe-btn tp-btn btn-primary">Log in</button>
                    </div>
                    <div className="form-separator-or">
                      <p className="text-center">OR</p>
                    </div>
                    <div className="single-input-wrapper">
                      <button type="button" className="subscribe-btn tp-btn btn-email"> <i className="fal fa-envelope"></i> Login With Email</button>
                    </div>
                    <div className="single-input-wrapper">
                      <button type="button" className="subscribe-btn tp-btn btn-facebook"> <i className="fab fa-facebook"></i> Login With Facebook</button>
                    </div>
                  </div>
                  <div className="form-bottom-text">
                    <p className="text-center">Have no account yet? <Link to="/sign-up">Sign up</Link> </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
       <footer className="eblog-footer-area footer-inner" id="footer">
        <div className="eblog-footer-copyright-area">
            <div className="copyright-content">
                <p className="title">2024 © All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default SignIn;
