import { useContext } from 'react';
import styled from 'styled-components';

interface IHeaderProps {
  children;
}

interface IToolbarProps {
  border: string;
  color: string;
}

export default function Header({ children }: IHeaderProps) {
  return (
    <Toolbar>
      <div>{children}</div>
      <div></div>
    </Toolbar>
  );
}

const Toolbar = styled.div`
  width: 100vw;
  height: 60px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
