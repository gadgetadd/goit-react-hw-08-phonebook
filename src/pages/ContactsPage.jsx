import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Fab, Drawer, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
export const ContactsPage = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Typography align="center" variant="h2">
        Contacts
      </Typography>
      <Filter />
      <ContactList />
      <Drawer
        anchor={'bottom'}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <ContactForm />
      </Drawer>
      <Fab
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
        color="primary"
        aria-label="add"
        onClick={() => setDrawerOpen(true)}
      >
        <AddIcon />
      </Fab>
    </>
  );
};
