import { createCSV } from '../../utils/csvParser';
import Contact from '../../models/contact';

export const exportContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({ where: { userId: req.user.id } });
    const csv = createCSV(contacts);
    res.attachment('contacts.csv').send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Failed to export contacts' });
  }
};
