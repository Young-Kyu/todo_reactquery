import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Paging } from '../../queries/user/model/UserModel';
import { S_PaginationNumber, S_PaginationWrapper, S_PaginationDirection } from '../../style/container/S_Layout';


interface PaginationProps {
  pagingData: Paging;
  onPageChange: (page: number) => void;
}


const PagingComponent = (props: PaginationProps) => {
  const { onPageChange, pagingData } = props;
  const { total, page, lastPage } = pagingData;
  const pagesToShow = 5;
  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, page - Math.floor(pagesToShow / 2));
    const endPage = Math.min(lastPage, startPage + pagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <S_PaginationNumber
          isCurrentPage={i == page}
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </S_PaginationNumber>
      );
    }

    return pageNumbers;
  };

  return (
    <S_PaginationWrapper>
      <span>Total User : {total}</span>
      <S_PaginationDirection
        onClick={() => handlePageChange(1)}
      >
        {'<'}
      </S_PaginationDirection>

      {renderPageNumbers()}

      <S_PaginationDirection
        onClick={() => handlePageChange(lastPage)}
      >
        {'>'}
      </S_PaginationDirection>
    </S_PaginationWrapper>
  );
};

export default PagingComponent;