import { useSelector, useDispatch } from 'react-redux';
import { Fab, Drawer, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useFetchContactsQuery } from 'redux/contactsApi';
import { selectisDrawerOpen } from 'redux/selectors';
import { openDrawerNew, closeDrawer } from 'redux/drawerSlice';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

export const ContactsPage = () => {
  const isDrawerOpen = useSelector(selectisDrawerOpen);
  const dispatch = useDispatch();
  const { data = [], isError, isLoading } = useFetchContactsQuery();
  const isMobile = useMediaQuery('(man-width:600px)');
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
        anchor={isMobile ? 'top' : 'bottom'}
        open={isDrawerOpen}
        onClose={() => dispatch(closeDrawer())}
      >
        <ContactForm />
      </Drawer>
      <Fab
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        color="primary"
        aria-label="add"
        onClick={() => dispatch(openDrawerNew())}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};
