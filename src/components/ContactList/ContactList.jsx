import { useSelector } from 'react-redux';

import { useFetchContactsQuery } from 'redux/contactsApi';
import { selectFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';

import { List } from '@mui/material';
export const ContactList = () => {
  const { data = [] } = useFetchContactsQuery();

  const filter = useSelector(selectFilter);

  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
