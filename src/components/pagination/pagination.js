import PropTypes from 'prop-types';
import { usePagination, DOTS } from '../../hooks/usePagination';
import './pagination.scss';

const Pagination = ({ info, currentPage, onPageChange }) => {
  const { pages } = info;
  const paginationRange = usePagination({
    currentPage,
    pages,
  });

  return (
    <ul
      className="pagination-container pagination-bar"
    >
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li key={Math.random() * 1000} className="pagination-item dots">&#8230;</li>;
        }
        return (
          <li
            key={Math.random() * 1000}
            className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''}`}
          >
            <div
              className="pagination-item_content"
              onClick={() => onPageChange(pageNumber)}
              role="button"
              tabIndex="0"
              onKeyPress={() => {}}
            >
              {pageNumber}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;

Pagination.propTypes = {
  info: PropTypes.object,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  info: {},
  currentPage: 1,
  onPageChange: () => {},
};
