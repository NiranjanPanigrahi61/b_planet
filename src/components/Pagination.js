import React from 'react';
import "../css/pagination.css";

function Pagination({ page, setPage, total }) {
  return (
    <div className="pagination">
      <div>
        <button
          className="pageButton icon"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="pageButton pageText">{page}</button>
        <button
          className="pageButton icon"
          disabled={page === total}
          onClick={() => setPage(page + 1)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
