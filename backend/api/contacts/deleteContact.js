import Contact from '../../models/contact';

export const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.destroy({ where: { id, userId: req.user.id } });
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};
