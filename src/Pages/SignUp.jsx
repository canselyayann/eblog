
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../store/userSlice'; // Redux action'ını import et
import { useNavigate, } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault(); // Formun otomatik gönderimini engeller

    // Şifrelerin eşleşip eşleşmediğini kontrol et
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Kullanıcı kaydı işlemi
    dispatch(signUpUser({ name, email, password }))
      .then(() => navigate('/')) // Kayıt başarılıysa ana sayfaya yönlendir
      .catch((error) => console.error("Failed to sign up:", error));
  };

  return (
    <div>
      {/* Header ve Breadcrumbs buraya gelecek */}
      <div className="eblog-breadcrumb-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                    <div className="breadcrumb-inner text-center">
                        <div className="meta">
                            <a href="#" className="prev">Home</a>
                            <img src="assets/images/icon/chevron-right.svg" alt=""/>
                            <a href="#" className="last">Sign Up</a>
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
                <h2 className="heading-title text-center">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                  <div className="form-inner inner">
                    <div className="single-input-wrapper">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="single-input-wrapper">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="single-input-wrapper">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="single-input-wrapper">
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Re-enter password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="single-input-wrapper check">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        value="terms of use"
                        required
                      />
                      <label htmlFor="terms">
                        I read and accept all <a href="#">terms of use.</a>
                      </label>
                    </div>
                    <div className="single-input-wrapper">
                      <button type="submit" className="subscribe-btn tp-btn btn-primary">
                        Create an account
                      </button>
                    </div>
                  </div>
                  <div className="form-bottom-text">
                    <p className="text-center">You already have an account? <a href="sign-in.html">Sign in</a></p>
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
  );
}

export default SignUp;
