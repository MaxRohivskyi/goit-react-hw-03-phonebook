import PropTypes from 'prop-types';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterList = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  formSubmitHandler = data => {
    const findContacts = this.state.contacts.find(
      contact => contact.name === data.name
    );

    !findContacts
      ? this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }))
      : alert(`${data.name} is already in contacts.`);
  };

  contactFilter = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  deleteContact = data => {
    return this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== data.id),
    }));
  };

  render() {
    const { filter } = this.state;

    const getAvailableContacts = this.contactFilter();

    return (
      <div className={css.App}>
        <h1 className="titlePhonebook">Phonebook</h1>
        <ContactForm formSubmitHandler={this.formSubmitHandler} />

        <h2 className="titleContacts">Contacts</h2>
        <Filter filter={filter} filterList={this.filterList} />
        <ContactList
          getAvailableContacts={getAvailableContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
