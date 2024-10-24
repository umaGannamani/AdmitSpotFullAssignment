import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', timezone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="text" placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input type="text" placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <input type="text" placeholder="Timezone" onChange={(e) => setForm({ ...form, timezone: e.target.value })} />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
