import { ReactNode } from 'react';
import AddContactPage from '../pages/AddContactPage';
import ContactListPage from '../pages/ContactListPage';
import HomePage from '../pages/HomePage';

interface Route {
  path: string;
  component: ReactNode;
}

const routes: Route[] = [
  {
    path: '/',
    component: <HomePage />,
  },
  {
    path: '/add-contact',
    component: <AddContactPage />,
  },
  {
    path: '/contact-list',
    component: <ContactListPage contacts={[]} />,
  },
];

export default routes;