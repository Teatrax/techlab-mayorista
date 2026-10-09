const TeamMemberCard = ({ nombre, rol, contacto }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="card bg-secondary bg-opacity-25 border border-secondary p-3 text-center h-100 rounded-3 shadow-sm">
        <div className="fw-bold text-white fs-6">{nombre}</div>
        <div className="text-warning small fw-semibold my-1">{rol}</div>
        <div className="small text-white-50">{contacto}</div>
      </div>
    </div>
  );
};

export default TeamMemberCard;