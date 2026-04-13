import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="brand">
          Tom Leskin
        </Link>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <a href="https://tleskin.github.io" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
          <li>
            <a href="https://github.com/tleskin" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
