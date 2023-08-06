import React from 'react';
import PropTypes from 'prop-types';
import { LoadeMoreBtn } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <LoadeMoreBtn type="button" onClick={onLoadMore}>
      Load More
    </LoadeMoreBtn>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
