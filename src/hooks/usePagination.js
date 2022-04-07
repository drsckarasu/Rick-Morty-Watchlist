import { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  pages,
  siblingCount = 1,
  currentPage,
}) => {
  // eslint-disable-next-line consistent-return
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= pages) {
      return range(1, pages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      pages,
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < pages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, pages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        pages - rightItemCount + 1,
        pages,
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex - 1, rightSiblingIndex + 1);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [pages, siblingCount, currentPage]);

  return paginationRange;
};
