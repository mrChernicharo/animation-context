import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../components/AppContext';

interface IContainerProps {
  border: string;
}

export default function Canvas() {
  const context = useContext(AppContext);

  return (
    <Container border={context.color}>
      <header>
        <div>Canvas</div>
      </header>
    </Container>
  );
}

export const Container = styled.div`
  height: calc(100vh - 60px);
  border: 1px solid ${(props: IContainerProps) => props.border};
`;
