import './Contact.css';

export default function Contact() {
  return (
    <div id="contactme" className="contact-container container">
      <h2 className="greeting subHeading">Just say Hello!</h2>
      <p className="subtext">Let us know more about you!</p>

      <form
        action="https://formsubmit.co/b419e531483e53e4bca6a6c52cb9f7dd"
        method="POST"
      >
        <div className="row g-3">
          <div className="col-md-6">
            <input type="text" name="firstName" placeholder="First Name" required className="form-control custom-input" />
          </div>
          <div className="col-md-6">
            <input type="text" name="lastName" placeholder="Last Name" required className="form-control custom-input" />
          </div>
          <div className="col-md-6">
            <input type="email" name="email" placeholder="Email" required className="form-control custom-input" />
          </div>
          <div className="col-md-6">
            <input type="text" name="subject" placeholder="Subject" required className="form-control custom-input" />
          </div>
          <div className="col-12">
            <textarea name="message" placeholder="Message" rows="5" required className="form-control custom-input"></textarea>
          </div>

          {/* Hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://abdulhannan-o1.github.io/my-Protfolio/thankyou.html" />

          <div className="col-12 text-center">
            <button type="submit" className="submit-btn">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  );
}
