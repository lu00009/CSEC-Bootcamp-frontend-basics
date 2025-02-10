const Pagination = (prop) => {
  const { currentPage, totalPages, onPageChange } = prop;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Debugging to see the props
  console.log("Props received in Pagination:", { currentPage, totalPages });

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2 mt-4">
      {/* Previous Page Button */}
      <button
        onClick={() => onPageChange((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
      >
        Prev
      </button>

      {/* Page Number Buttons */}
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border rounded-md ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Page Button */}
      <button
        onClick={() => onPageChange((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
