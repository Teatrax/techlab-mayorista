import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../../data/teamData';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto border-top border-secondary">
      <div className="container">
        {/* Cabecera del Footer */}
        <div className="text-center mb-4">
          <h4 className="fw-bold text-warning mb-2">TechLab Distribuidora Mayorista</h4>
          <p className="small mb-0 text-white-50">
            Abastecimiento integral: Tecnologia, Alimentos secos, Bebidas y Logistica comercial.
          </p>
        </div>

        {/* Seccion Equipo */}
        <h6 className="text-center text-uppercase fw-bold small mb-3 text-light">
          Equipo Responsable
        </h6>
        
        <div className="row g-3 justify-content-center mb-4">
          {teamMembers.map((persona) => (
            <TeamMemberCard 
              key={persona.id} 
              nombre={persona.nombre} 
              rol={persona.rol} 
              contacto={persona.contacto} 
            />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center small pt-3 border-top border-secondary text-secondary">
          &copy; {new Date().getFullYear()} TechLab S.A. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;