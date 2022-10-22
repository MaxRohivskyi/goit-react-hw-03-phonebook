import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css';

export const ContactListItem = ({ name, number, contact, deleteContact }) => {
  return (
    <>
      <span>
        {name}: {number}
      </span>
      <button
        type="submit"
        className={css.button}
        onClick={() => deleteContact(contact)}
      >
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
