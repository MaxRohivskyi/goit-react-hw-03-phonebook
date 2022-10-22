import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ filter, filterList }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        className={css.inputFilter}
        onChange={filterList}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterList: PropTypes.func.isRequired,
};
