import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { name: 'home', path: '/' },
  { name: 'canvas', path: '/canvas' },
];

export function NavAnchor({ path, children }) {
  return (
    <Link href={path}>
      <a>{children}</a>
    </Link>
  );
}

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <nav>
      <ul>
        {links.map(({ name, path }) => (
          <li key={path}>
            {pathname === path ? <span>{name}</span> : <NavAnchor path={path}>{name}</NavAnchor>}{' '}
          </li>
        ))}
      </ul>
    </nav>
  );
}
