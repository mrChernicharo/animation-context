import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../components/AppContext';

interface IHeaderProps {
  children;
}

interface IToolbarProps {
  border: string;
  color: string;
}

export default function Header({ children }: IHeaderProps) {
  const context = useContext(AppContext);

  return (
    <Toolbar border={context.color} color={context.color}>
      <div>{children}</div>
      <div>context color: {context.color}</div>
    </Toolbar>
  );
}

const Toolbar = styled.div`
  width: 100vw;
  height: 60px;
  border: 1px solid;
  border-color: ${(props: IToolbarProps) => props.border};
  color: ${(props: IToolbarProps) => props.color};
`;
