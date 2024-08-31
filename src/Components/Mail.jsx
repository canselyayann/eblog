import React from 'react'

export default function Mail() {
  return (
    <div>
       <section className="eblog-newsletter-area tp-section-gap">
        <div className="container">
            <div className="section-inner">
                <p className="sub-title">Weekly updates</p>
                <h2 className="section-title">Join our newsletter for <br/>
                    latest updates!</h2>
                <p className="desc">Nisi dignissim tortor sed quam sed ipsum ut. <br/>
                    Montes, morbi euismod elit.</p>
                <form action="#" className="newsletter-form">
                    <div className="form-inner">
                        <div className="single-input-wrapper">
                            <input type="email" name="email" placeholder="Your email address" required/>
                        </div>
                        <div className="single-input-wrapper">
                            <button type="submit" className="subscribe-btn tp-btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </div>
  )
}
