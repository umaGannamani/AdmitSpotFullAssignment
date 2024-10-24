const ContactList = ({ contacts }) => (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.email}
        </li>
      ))}
    </ul>
  );
  
  export default ContactList;
  