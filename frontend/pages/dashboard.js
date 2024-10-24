import { useEffect, useState } from 'react';
import ContactList from '../components/ContactList';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/contacts', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Your Contacts</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default Dashboard;
