import React from 'react';
import { LoadMoreButtonStyle } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ onLoadMoreBtnClick }) => {
  return (
    <LoadMoreButtonStyle onClick={onLoadMoreBtnClick} type="button">
      Load more
    </LoadMoreButtonStyle>
  );
};
