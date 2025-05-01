import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts, null, 2);
  try {
    await fs.writeFile(PATH_DB, data, { encoding: 'utf-8' });
  } catch (error) {
    console.log(error);
  }
};
