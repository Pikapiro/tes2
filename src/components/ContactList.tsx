import React from 'react';
import styles from '../styles/ContactList.module.css';

interface Contact {
  id: number;
  name: string;
  organization: string;
  email: string;
  mobile: string;
}

interface ContactListProps {
  contacts: Contact[];
  onRemove: (id: number) => void;
  onEdit: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onRemove, onEdit }) => {
  const handleEdit = (contact: Contact) => {
    // Pass the contact to the onEdit function
    onEdit(contact);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Organization</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.organization}</td>
            <td>{contact.email}</td>
            <td>{contact.mobile}</td>
            <td>
              <button onClick={() => onRemove(contact.id)}>Remove</button>
              <button onClick={() => handleEdit(contact)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;
