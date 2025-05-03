import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const fakeContact = createFakeContact();
      newContacts.push(fakeContact);
    }
    const updatedContacts = [...contacts, ...newContacts];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(3);
