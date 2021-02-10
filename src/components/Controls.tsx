import React from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';
import PlayPauseButton from './PlayPauseButton';

export function Controls() {
  return (
    <Container>
      <PlayPauseButton />
      <ColorButton />
    </Container>
  );
}

export default Controls;

const Container = styled.div`
  border: 1px solid red;
`;
