import { useContext } from 'react';
import styled from 'styled-components';
import VideoContext from './VideoContext';

interface IHeaderProps {
  children;
}

interface IToolbarProps {
  border: string;
  color: string;
}

export default function Header({ children }: IHeaderProps) {
  const { color } = useContext(VideoContext);

  return (
    <Toolbar border={color} color={color}>
      <div>{children}</div>
      <div></div>
    </Toolbar>
  );
}

const Toolbar = styled.div`
  width: 100vw;
  border: 1px solid ${(props: IToolbarProps) => props.border};
  color: ${props => props.color};
  display: grid;
  text-align: center;

  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
