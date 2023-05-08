import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { AppTitle, SectionTitle, Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <AppTitle>Phonebook</AppTitle>
      <SectionTitle>Add new contact</SectionTitle>
      <ContactForm />
      <SectionTitle>Contacts</SectionTitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
