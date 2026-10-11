import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '../../data/teamData';

// Pie de página con datos de la empresa y el equipo
const Footer = () => (
  <footer className="bg-dark text-white pt-5 pb-3 mt-auto border-top border-secondary">
    <div className="container">
      {/* Presentación de la empresa */}
      <div className="text-center mb-4">
        <h4 className="fw-bold text-warning mb-2">TechLab Distribuidora Mayorista</h4>
        <p className="small mb-0 text-white-50">
          Abastecimiento integral: tecnología, alimentos secos, bebidas y logística comercial.
        </p>
      </div>

      {/* Equipo responsable */}
      <h6 className="text-center text-uppercase fw-bold small mb-3 text-light">
        Equipo responsable
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

      {/* Derechos reservados */}
      <div className="text-center small pt-3 border-top border-secondary text-secondary">
        &copy; {new Date().getFullYear()} TechLab S.A. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
