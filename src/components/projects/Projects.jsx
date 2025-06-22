import './Projects.css'
export default function Projects() {
  return (
    <section id="projects" className="my-5 text-center text-white">
      <div className="container">
        <h2 className='subHeading'>PROJECTS</h2>
        <div className="row justify-content-center mt-4">
          {[
            {
              name: 'Westpoint Clone',
              description: 'Cloning Commerce with Clean Code.',
              image: '/project-img/westpointClone-img.png',
              link: 'https://abdulhannan-o1.github.io/westpooint-clone/',
              animation: 'fade-right'
            },
            {
              name: 'Currency Converter',
              description: 'Convert Currencies Instantly. Built with React for Speed and Simplicity.',
              image: '/project-img/currency-converter.png',
              link: 'https://eco-cdn.co.uk/webdeveloper2.0/content/2-css/bbc.html',
              animation: 'fade-left'
            },
            {
              name: 'Grade Calculator',
              description: 'Type Your Marks. Get Your Grade and Percentage. Instantly.',
              image: '/project-img/grade.png',
              link: 'https://github.com/AbdulHannan-o1/grade-calculator-',
              animation: 'fade-right'
            },
            {
              name: 'Crypto Insight (API + CSV Exporter)',
              description: 'Fetch. Save. Stay Updated — Your Crypto Assistant in Python."',
              image: '/project-img/webSraper.png',
              link: 'https://github.com/AbdulHannan-o1/web-scraper-',
              animation: 'fade-left'
            }
          ].map((proj, index) => (
            <div
              key={index}
              className="bbc-project card p-3 m-3"
              data-aos={proj.animation}
            >
              <img
                src={proj.image}
                alt={proj.name}
                className="img-fluid project-image mb-3"
              />
              <div className="text">
                <h3 className="project-name">{proj.name}</h3>
                <div className="content">
                  <p>{proj.description}</p>
                </div>
                <a
                  className="button"
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
        <a 
            href="https://github.com/AbdulHannan-o1?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-btn"
            >
            🔗 View All Repositories on GitHub
          </a>

      </div>
    </section>
  );
}
