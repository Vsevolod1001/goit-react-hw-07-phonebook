import { AddContact } from './AddContact/AddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { useFetchContactsQuery } from 'redux/rtcQuery/rtcSlice';

export const App = () => {
  const { data } = useFetchContactsQuery();
  return (
    <div style={{ width: 400 }}>
      <h1>Phonebook</h1>
      <AddContact contacts={data} />
      <Section name="Contacts">
        <Filter />
        <ContactList contacts={data} />
      </Section>
    </div>
  );
};
