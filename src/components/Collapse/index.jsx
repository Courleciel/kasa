import { useState } from 'react';
import arrow from '../../assets/arrow.png'

function Collapse() {
  const [openSections, setOpenSections] = useState({
    Fiabilité: false,
    Respect: false,
    Service: false,
    Sécurité: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const sections = {
    Fiabilité: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    Respect: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    Service: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
    Sécurité: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
  };

  return (
    <div className="collapse-container">
      {Object.keys(sections).map((section) => (
        <div key={section} className="collapse-section">
          <div className="collapse-header" onClick={() => toggleSection(section)}>
            <h3>{section}</h3>
            <img
              src={arrow}
              alt="arrow"
              className={`collapse-arrow ${openSections[section] ? 'open' : ''}`}
            />
          </div>
          {openSections[section] && (
            <div className="collapse-content">
              <p>{sections[section]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Collapse;
