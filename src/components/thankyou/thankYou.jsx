import './ThankYou.css';

export default function ThankYou() {
  return (
    <div className="thankyou-container">
      <h1 className="thankyou-title">🎉 Thank You!</h1>
      <p className="thankyou-message">
        Your message has been successfully sent. I'll get back to you soon!
      </p>
      <a href="/" className="thankyou-btn">← Back to Home</a>
    </div>
  );
}
