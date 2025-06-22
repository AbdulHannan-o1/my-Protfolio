import './hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text" data-aos="fade-right">
          <h3>
            A passionate <strong>Full Stack Developer 🚀</strong> skilled in creating dynamic and responsive web applications using <strong>React, AOS, Bootstrap, and Tailwind CSS</strong> on the frontend, with backend expertise in <strong>PHP, JavaScript, and MySQL</strong> for building robust and scalable server-side systems.
          </h3>

          {/* ✅ Social Icons Section */}
          <div className="social-icons mt-4">
            <a href="https://github.com/AbdulHannan-o1/" className="icon github" target="_blank">
              <FontAwesomeIcon icon={faGithub} bounce />            </a>
            <a href="https://x.com/abdul_hanna_n" className="icon twitter" target="_blank">
              <FontAwesomeIcon icon={faXTwitter}  />
            </a>
            {/* <a href="https://facebook.com/abdul.hannan.928159" className="icon facebook" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a> */}
            <a href="https://www.instagram.com/a_bdulhanna_n/?igsh=MXJkemNpYTl5dm00YQ%3D%3D#" className="icon instagram" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="hero-image" data-aos="fade-left">
          <img src="Abdul-Hannan.jpg" alt="Abdul Hannan" />
        </div>
      </div>
    </section>
  );
}
