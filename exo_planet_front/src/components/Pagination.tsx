import React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="button-container">
      <button
        className="prev-button"
        onClick={() => onPageChange(Math.max(0, page - 1))}
        disabled={page === 0}
      >
        PREV
      </button>

      <span>
        ARCHIVE PAGE {page + 1} // {totalPages || 1}
      </span>

      <button
        className="next-button"
        onClick={() => onPageChange(page + 1)}
        disabled={page + 1 >= totalPages}
      >
        NEXT
      </button>
    </div>
  );
};
