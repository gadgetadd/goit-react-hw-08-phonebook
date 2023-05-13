import { useState } from 'react';
import { Fab, Drawer, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useFetchContactsQuery } from 'redux/contactsApi';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

export const ContactsPage = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { data = [], isError, isLoading } = useFetchContactsQuery();
  return (
    <Container component="main">
      {isLoading && <Loader />}
      {isError && (
        <Typography>
          {'Something went wrong. Please, reload the page'}
        </Typography>
      )}
      {data.length !== 0 ? (
        <>
          <Typography align="center" component="h1" variant="h4">
            Contacts
          </Typography>
          <Filter />
          <ContactList />
        </>
      ) : (
        <Typography sx={{ mt: 4 }} align="center" variant="h5" paragraph>
          Your phone book is empty. Please click the button in the lower right
          corner and add new contacts.
        </Typography>
      )}

      <Drawer
        anchor={'bottom'}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <ContactForm onSuccess={() => setDrawerOpen(false)} />
      </Drawer>
      <Fab
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        color="primary"
        aria-label="add"
        onClick={() => setDrawerOpen(true)}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};
