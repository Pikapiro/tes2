import React from 'react';
import ContactList from '../components/ContactList';

interface Contact {
  id: number;
  name: string;
  organization: string;
  email: string;
  mobile: string;
}

const ContactListPage: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  return (
    <div>
      <h1>Contact List</h1>
      <ContactList contacts={contacts} onRemove={function (id: number): void {
        throw new Error('Function not implemented.');
      } } onEdit={function (contact: Contact): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
};

export default ContactListPage;
