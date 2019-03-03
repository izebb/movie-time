import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { imageTemplate } from '../utils';

const DisplayImage = styled.img`
  max-height: 100%;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 0.5s ease-out;
  transition: ${({ isLoaded }) =>
    isLoaded ? 'opacity 0.4s ease-out' : 'none'};
  background-color: #444;
`;

export function MovieImage({ template, width, height }) {
  const [loaded, useLoaded] = useState(false);
  const src = imageTemplate(template)(width, height);
  let timeout = null;

  useEffect(() => {
    useLoaded(false);
  }, [template]);

  const isImageLoaded = () => {
    useLoaded(false);
    timeout && clearTimeout(timeout.current);
    timeout = setTimeout(() => {
      useLoaded(true);
    }, 16);
  };

  return (
    <DisplayImage onLoad={isImageLoaded} isLoaded={loaded} src={src} alt="" />
  );
}

MovieImage.defaultProps = {
  template: ''
};
