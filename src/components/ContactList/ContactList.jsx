import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ getAvailableContacts, deleteContact }) => {
  return (
    <ul className={css.listContacts}>
      {getAvailableContacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem
            name={contact.name}
            number={contact.number}
            contact={contact}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  getAvailableContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
