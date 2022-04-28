import { AddContact } from './AddContact/AddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <div style={{ width: 400 }}>
      <h1>Phonebook</h1>
      <AddContact />
      <Section name="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
