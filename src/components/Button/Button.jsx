import React from 'react';
import { LoadeMoreBtn } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <LoadeMoreBtn type="button" onClick={onLoadMore}>
      Load More
    </LoadeMoreBtn>
  );
};
