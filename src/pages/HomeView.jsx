import HeroBanner from '../components/home/HeroBanner';
import BenefitCard from '../components/home/BenefitCard';
import { benefits } from '../data/benefits';

// Portada: banner principal y beneficios
const HomeView = () => (
  <div className="container py-4">
    <HeroBanner />

    <div className="row g-4 my-2">
      {benefits.map((benefit) => (
        <BenefitCard
          key={benefit.id}
          icon={benefit.icon}
          titulo={benefit.titulo}
          descripcion={benefit.descripcion}
        />
      ))}
    </div>
  </div>
);

export default HomeView;
