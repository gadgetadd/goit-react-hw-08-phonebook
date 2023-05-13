import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';

import { Report } from 'notiflix/build/notiflix-report-aio';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

import { Box, TextField, Button, Container, Avatar } from '@mui/material';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const inputChangeHandler = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('unsupported input name');
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const {
      name: { value: name },
      number: { value: number },
    } = e.currentTarget.elements;
    const isExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExists) {
      enqueueSnackbar(`${name} is already in contacts`, { variant: 'warning' });
      return;
    }
    addContact({ name, number });

    formReset();
  };

  return (
    <Container maxWidth="xs" sx={{ my: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <ContactPageIcon />
        </Avatar>
        <Box
          sx={{ textAlign: 'center' }}
          component="form"
          onSubmit={submitHandler}
        >
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
            maxLength={35}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoFocus
            onChange={inputChangeHandler}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Number"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            maxLength={35}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={inputChangeHandler}
          />

          <Button sx={{ mt: 2 }} variant="contained" type="submit">
            Add new contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
