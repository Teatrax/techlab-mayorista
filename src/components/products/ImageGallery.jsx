import { useState } from 'react';

// Imagen principal con miniaturas para cambiar de foto
const ImageGallery = ({ imagenes, alt }) => {
  const [selected, setSelected] = useState(imagenes[0]);

  return (
    <>
      <div className="ratio ratio-4x3 bg-light rounded-3 overflow-hidden border mb-2">
        <img src={selected} alt={alt} className="w-100 h-100 object-fit-cover" />
      </div>

      {/* Las miniaturas solo aparecen si hay más de una foto */}
      {imagenes.length > 1 && (
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          {imagenes.map((foto, index) => (
            <button
              key={foto}
              type="button"
              aria-label={`Ver imagen ${index + 1} de ${imagenes.length}`}
              aria-pressed={selected === foto}
              onClick={() => setSelected(foto)}
              className={`btn p-0 border rounded-2 overflow-hidden thumb-gallery ${
                selected === foto ? 'border-warning border-2 shadow-sm' : 'border-light'
              }`}
            >
              <img src={foto} alt="" className="w-100 h-100 object-fit-cover" />
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
