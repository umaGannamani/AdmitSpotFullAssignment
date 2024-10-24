import { parseCSV } from '../../utils/csvParser';
import Contact from '../../models/contact';

export const uploadContacts = async (req, res) => {
  try {
    const contacts = parseCSV(req.file.path);
    const newContacts = await Contact.bulkCreate(contacts);
    res.json(newContacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload contacts' });
  }
};
