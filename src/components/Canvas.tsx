import { useContext } from 'react';
import styled from 'styled-components';
import Controls from '../components/Controls';

interface IContainerProps {
  border: string;
}

export default function Canvas() {
  // const context = useContext(AppContext);

  return (
    <Container>
      <header>
        <div>Canvas</div>
      </header>
      <main>
        <Controls />
      </main>
    </Container>
  );
}

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: block;
  padding: 16px;

  header {
    div {
    }
  }
  main {
    border: 1px solid;
  }
`;
