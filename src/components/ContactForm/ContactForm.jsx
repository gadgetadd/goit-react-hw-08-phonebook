import { useState } from 'react';

import { Report } from 'notiflix/build/notiflix-report-aio';


import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

// import { Form, Label, Input, Button } from './ContactForm.styled';

import { Box, TextField, Button, Container } from '@mui/material';

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
      return Report.info(
        'Enter correct information',
        `${name} is already in contacts`,
        'Ok'
      );
    }
    addContact({ name, number });

    formReset();
  };

  return (
    <Container maxWidth="xs" sx={{ my: 4 }}>
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
    </Container>
  );
};
