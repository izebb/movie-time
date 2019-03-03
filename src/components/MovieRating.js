import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  fill: #e0b221;
  stroke: #fff;
  stroke-width: 2;
  width: 45px;
  height: 45px;
  margin-right: 3px;
  transform: scale(1);
  transition: transform 120ms ease-out;
`;

const RatingValue = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;

const RatingValueWrapper = styled.span`
  font-size: 12px;
  color: #ddd;
`;
const RatingLink = styled.div`
  color: inherit;
  margin-top: 2px;
  font-size: 13px;
`;

const Container = styled.a`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;

  &:hover {
    ${Svg} {
      transform: scale(1.15);
    }
  }
`;

const RatingStar = () => {
  return (
    <Svg x="0px" y="0px" viewBox="0 0 512 640">
      <g>
        <g>
          <g>
            <g>
              <path d="M383.741,489.921c-8.885,0-17.513-3.163-24.311-8.911l-102.941-75.045l-105.095,76.662      c-6.474,4.72-14.112,7.214-22.091,7.215c-11.989,0-23.358-5.793-30.412-15.497c-6.872-9.439-8.954-21.616-5.646-32.763      c0.02-0.337,0.083-0.676,0.192-1.009l40.426-123.601L28.51,240.778C11.683,228.554,7.918,204.92,20.11,188.09      c7.079-9.734,18.464-15.542,30.459-15.542c0.884,0,1.778,0.032,2.661,0.095l127.489,0.263l39.933-123.754      c5.038-15.631,19.429-26.135,35.81-26.135c3.913,0,7.801,0.614,11.56,1.825c11.585,3.695,20.707,12.873,24.39,24.546      l39.874,123.518l130.089-0.263c20.749,0,37.624,16.851,37.624,37.563c0,11.706-5.51,22.8-14.787,29.877      c-0.213,0.258-0.461,0.492-0.741,0.695l-105.328,76.194l40.426,123.601c3.105,9.591,2.302,19.808-2.261,28.778      c-4.566,8.978-12.345,15.625-21.902,18.717C391.616,489.297,387.691,489.921,383.741,489.921z" />
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export const MovieRating = ({ rating, votes, url }) => {
  return (
    <Container href={url} target="__blank" rel="noopener">
      <RatingStar />
      <RatingValueWrapper>
        <div>
          <RatingValue>{rating}</RatingValue> / 10
        </div>
        <RatingLink>{votes}</RatingLink>
      </RatingValueWrapper>
    </Container>
  );
};

MovieRating.defaultProps = {
  rating: 0,
  votes: '',
  url: ''
};
