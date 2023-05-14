import PropTypes from 'prop-types';
import { enqueueSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { openDrawerEdit } from 'redux/drawerSlice';

import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemButton,
  Box,
  CircularProgress,
  Tooltip,
 
} from '@mui/material';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const dispatch = useDispatch();
  return (
    
      <ListItem
        sx={{ pr: '96px', pl: 0 }}
        secondaryAction={
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Tooltip title="Edit">
              <IconButton
                aria-label="edit"
                onClick={() => dispatch(openDrawerEdit(id))}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                edge="end"
                aria-label="delete"
                disabled={isLoading}
                onClick={() =>
                  deleteContact(id)
                    .then(({ data }) => {
                      enqueueSnackbar(`Contact ${data.name} deleted`, {
                        variant: 'success',
                      });
                    })
                    .catch(() =>
                      enqueueSnackbar('Something went wrong', {
                        variant: 'error',
                      })
                    )
                }
              >
                {isLoading ? <CircularProgress size={24} /> : <DeleteIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        }
      >
        <ListItemButton href={`tel:${number}`} sx={{ p: 0 }}>
          <ListItemAvatar>
            <Avatar>
              <ContactPhoneIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${name}`} secondary={`${number}`} />
        </ListItemButton>
      </ListItem>
  
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
