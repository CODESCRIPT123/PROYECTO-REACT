export default function Pagination({ skip, setSkip, limit, total }) {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const handlePrev = () => {
    if (skip >= limit) {
      setSkip(skip - limit);
    }
  };

  const handleNext = () => {
    if (skip + limit < total) {
      setSkip(skip + limit);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
      >
        Anterior
      </button>
      
      <span className="text-gray-700 font-medium">
        Página {currentPage} de {totalPages}
      </span>
      
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages || totalPages === 0}
        className="px-4 py-2 bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors font-medium"
      >
        Siguiente
      </button>
    </div>
  );
}