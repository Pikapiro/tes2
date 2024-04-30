import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../styles/ContactForm.module.css';

interface Contact {
  name: string;
  organization: string;
  email: string;
  mobile: string;
}

interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!name || !email || !mobile) {
      alert('Name, email, and mobile are required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!isValidIsraeliMobile(mobile)) {
      alert('Please enter a valid Israeli mobile number.');
      return;
    }

    const newContact: Contact = {
      name,
      organization,
      email,
      mobile
    };

    onAddContact(newContact);
    alert(`${name} saved successfully.`);
    // Clear form fields
    setName('');
    setOrganization('');
    setEmail('');
    setMobile('');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleOrganizationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrganization(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
  };

  // Function to validate Israeli mobile number
  const isValidIsraeliMobile = (mobile: string): boolean => {
    const israeliMobileRegex = /^(05\d|5\d|\+9725)([0-9]{7})$/;
    return israeliMobileRegex.test(mobile);
  };

  // Function to validate email
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="organization">Organization:</label>
        <input
          type="text"
          id="organization"
          value={organization}
          onChange={handleOrganizationChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          value={mobile}
          onChange={handleMobileChange}
          required
        />
      </div>
      <button type="submit">
        Save
      </button>
    </form>
  );
};

export default ContactForm;
