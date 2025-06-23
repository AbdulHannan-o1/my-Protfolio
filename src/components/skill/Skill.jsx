import './skill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs,  faPhp,  } from '@fortawesome/free-brands-svg-icons';
import { faPython,  faGolang } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
const logos = [
  // Frontend core
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "JavaScript", icon: faJs },

  // Styling frameworks
  { name: "Bootstrap", img: "./logo/bootstrap.png" },
  { name: "Tailwind CSS", img: "./logo/tailwind.png" },
  { name: "jQuery", img: "./logo/jquery.png" },

  // JS Libraries/Frameworks
  { name: "React", icon: faReact },
  { name: "Node.js", icon: faNodeJs },

  // Backend
  { name: "PHP", icon: faPhp },
  { name: "MySQL", icon: faDatabase },
  { name: "Python", icon: faPython },
  { name: "Firebase", img: "/logo/firebase.png" },


];

const Skillset = () => {
  return (
    <section id="skillset" className="py-5 text-white">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold skillsetHead  subHeading">Professional Skillset</h2>
        <div className="skillset-grid">
          {logos.map((logo, idx) => (
            <div className="skill-item" key={idx} title={logo.name}>
              {logo.icon ? (
                <FontAwesomeIcon icon={logo.icon} />
              ) : logo.img ? (
                <img src={logo.img} alt={logo.name} className="img-icon" />
              ) : (
                <span>{logo.name}</span>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skillset;