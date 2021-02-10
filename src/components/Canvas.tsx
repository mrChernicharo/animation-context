import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../components/AppContext';
import Controls from '../components/Controls';

interface IContainerProps {
  border: string;
}

export default function Canvas() {
  // const context = useContext(AppContext);

  return (
    <AppContext.Consumer>
      {context => (
        <Container border={context.color}>
          <header>
            <div>Canvas</div>
          </header>
          <main>
            <Controls />
          </main>
        </Container>
      )}
    </AppContext.Consumer>
  );
}

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: block;
  border: 1px solid ${(props: IContainerProps) => props.border};
  padding: 16px;

  header {
    div {
    }
  }
  main {
    border: 1px solid;
  }
`;
