
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

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
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
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
  function toggleMenu(event: MouseEvent<HTMLDivElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <header>
        <nav className='navbar'>
          <ul>
            <li>
              <Link href="/HomePage">Home</Link>
            </li>
            <li>
              <Link href="/AddContactPage">Add Contact</Link>
            </li>
            
          </ul>
        </nav>

        <nav className='navbarMobile'>
   
      <div >
        <ul>
        
            <li>
              <Link href="/HomePage">Home</Link>
            </li>
            <li>
              <Link href="/AddContactPage">Add Contact</Link>
            </li>
            
          </ul>
        
      </div>
      <div className='hamburger' onClick={toggleMenu}>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
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