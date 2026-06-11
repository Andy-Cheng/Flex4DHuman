import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Container = styled.div`
  width: 854px;
  height: 480px;
  margin: 32px auto;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: auto;
    height: auto;
  }
`;

const Video = ({ url }) => (
  <Container>
    <ReactPlayer url={url} width="100%" height="100%" />
  </Container>
);

export default Video;
