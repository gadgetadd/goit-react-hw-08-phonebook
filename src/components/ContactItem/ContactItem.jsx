import PropTypes from 'prop-types';

import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          disabled={isLoading}
          onClick={() => deleteContact(id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ContactPhoneIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`${name}`} secondary={`${number}`} />
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

//  <ListItem>
//       <ContactWrapper>
//         <RiContactsLine size="20px" color="grey" />
//         <Contact>{}</Contact>
//       </ContactWrapper>
//       <Button
//         type="button"
//         disabled={isLoading}
//         onClick={() => deleteContact(id)}
//       >
//         <MdOutlineDeleteForever size="25px" color="grey" />
//       </Button>
//     </ListItem>
