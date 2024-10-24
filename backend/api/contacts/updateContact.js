import Contact from '../../models/contact';

export const updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.update(req.body, { where: { id, userId: req.user.id } });
    res.json({ message: 'Contact updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
};
