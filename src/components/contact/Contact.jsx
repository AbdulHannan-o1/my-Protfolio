import './Contact.css';

export default function Contact() {
  return (
    <div id="contactme" className="contact-container">
      <h2 className="greeting subHeading">Just say Hello!</h2>
      <p className="subtext">Let us know more about you!</p>

      <form
        action="https://formsubmit.co/shaikhhannan729@gmail.com"
        method="POST"
        className="form-grid"
      >
        <input type="text" name="firstName" placeholder="First Name" required />
        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" rows="5" required></textarea>

        {/* Hidden fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://abdulhannan-o1.github.io/Protfolio/thankyou.html"
        />

        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  );
}
