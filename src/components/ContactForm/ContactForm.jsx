import PropTypes from 'prop-types';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';

import { string } from 'yup';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsApi';

import {
  Box,
  TextField,
  Button,
  Container,
  Avatar,
  CircularProgress,
} from '@mui/material';

export const ContactForm = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isValid, setValid] = useState({ name: true, number: true });
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const nameSchema = string()
    .matches(/^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$/)
    .max(35);

  const numberSchema = string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .max(20);



  const inputChangeHandler = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        nameSchema
          .validate(value)
          .then(() => setValid(prev => ({ ...prev, name: true })))
          .catch(() => setValid(prev => ({ ...prev, name: false })));

        setName(value);
        break;
      case 'number':
        numberSchema
          .validate(value)
          .then(() => setValid(prev => ({ ...prev, number: true })))
          .catch(() => setValid(prev => ({ ...prev, number: false })));

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
    if (!isValid.name) {
      enqueueSnackbar('Please enter the correct name', {
        variant: 'error',
      });
      return;
    }
    if (!isValid.number) {
      enqueueSnackbar('Please enter the correct number', {
        variant: 'error',
      });
      return;
    }
    addContact({ name, number })
      .then(({ data }) => {
        onSuccess();
        enqueueSnackbar(`Contact ${data.name} added`, {
          variant: 'success',
        });
      })
      .catch(() =>
        enqueueSnackbar('Something went wrong', {
          variant: 'error',
        })
      );

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
          {' '}
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <ContactPageIcon />
          )}
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
            error={!isValid.name}
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
            error={!isValid.number}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={inputChangeHandler}
          />
          <Button
            sx={{ mt: 2 }}
            variant="contained"
            type="submit"
            disabled={isLoading}
          >
            Add new contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

ContactForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};
