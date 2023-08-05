import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <InfinitySpin width="200" color="rgb(61, 106, 255)" />
    </LoaderContainer>
  );
};
