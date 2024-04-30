import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

export const AddContactPage: React.FC = () => {
  interface Contact {
    id: number;
    name: string;
    organization: string;
    email: string;
    mobile: string;
  }
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const handleAddContact = (newContact: Omit<Contact, 'id'>) => {
    const contactWithId: Contact = {
      id: nextId,
      ...newContact,
    };
    setNextId(nextId + 1);
    setContacts([...contacts, contactWithId]);
  };

  const handleEditContact = (editedContact: Contact) => {
    setContacts(contacts.map(contact => contact.id === editedContact.id ? editedContact : contact));
    setEditingContact(null);
  };

  const handleRemoveContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
  };

  return (
    <div>
      <h1>Add Contact</h1>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} onRemove={handleRemoveContact} onEdit={handleEdit} />
      
    </div>
  );
};
