import Contact from '../../models/contact';

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({ where: { userId: req.user.id } });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve contacts' });
  }
};
