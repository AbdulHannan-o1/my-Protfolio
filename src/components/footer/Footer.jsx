import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>&copy; 2025 Abdul Hannan</div>
        <div className="social-icons">
          <a href="https://github.com/AbdulHannan-o1/" className="icon github" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
           <a href="https://x.com/abdul_hanna_n" className="icon twitter" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
        </div>
      </div>
    </footer>
  );
}
