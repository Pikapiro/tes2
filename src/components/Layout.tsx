import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/HomePage">Home</Link>
            </li>
            <li>
              <Link href="/AddContactPage">Add Contact</Link>
            </li>
            
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>dani</p>
      </footer>
    </div>
  );
};

export default Layout;