import React, { useState } from "react";
import certificate1 from '../assets/Fullstack-certificate.jpg';
import certificate2 from '../assets/Aws-certificate.jpg';

const certificates = [
    {
      id: 1,
      title: "Full Stack Developer Certification",
      issuer: "Feb Tech IT Solution",
      date: "April 2024 to July 2024",
      description: 
        "This certification validates my expertise in Full Stack Development, covering front-end and back-end technologies. " + 
        "I gained hands-on experience with HTML, CSS, JavaScript, and React for building responsive UI components, " + 
        "while also mastering Node.js and database management (MongoDB/MySQL) for scalable backend solutions. " + 
        "The program emphasized building real-world applications, API integration, authentication, and deployment strategies.",
      image: certificate1,
    },
    {
      id: 2,
      title: "Cloud Practitioner Certification",
      issuer: "ICT Academy under Infosys Foundation", 
      date: "14 November 2024 to 30 November 2024",
      description: 
        "This certification showcases my proficiency in cloud computing concepts, architecture, and best practices. " + 
        "I developed a strong understanding of cloud deployment models (IaaS, PaaS, SaaS), security protocols, " + 
        "and cloud-native applications. The course covered key topics like virtualization, cloud storage, networking, " + 
        "and cost optimization strategies in cloud environments. Additionally, I worked on practical scenarios involving AWS, Azure, and Google Cloud services.",
      image: certificate2,
    }
  ];
  

const CertificateCard = ({ certificate }) => {
    const [flipped, setFlipped] = useState(false);
  
    return (
      <div className="certificate-card" onClick={() => setFlipped(!flipped)}>
        <div className={`card-inner ${flipped ? "flipped" : ""}`}>
          {/* Front Side - Image */}
          <div className="card-front">
            <img src={certificate.image} alt={certificate.title} className="certificate-image" />
          </div>
  
          {/* Back Side - Details */}
          <div className="card-back">
            <h2>{certificate.title}</h2>
            <p className="issuer">{certificate.issuer}</p>
            <p className="date">{certificate.date}</p>
            <p className="description">{certificate.description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const Certificates = () => {
    return (
      <div className="certificates-section">
        <h1 className="section-title">My Certificates</h1>
        <div className="certificates-container">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Certificates;