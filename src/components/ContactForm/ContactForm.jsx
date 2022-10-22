import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let idFullName = nanoid();
    const totalState = {
      id: idFullName,
      name: this.state.name,
      number: this.state.number,
    };

    this.props.formSubmitHandler(totalState);

    this.reset();
  };

  reset = () => {
    this.setState({
      filter: '',
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="sendName" className={css.name}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
          className={css.inputName}
          id="sendName"
        />
        <label htmlFor="sendTel" className={css.name}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.inputTel}
          onChange={this.handleChange}
          value={number}
          id="sendTel"
        />
        <button type="submit" className={css.submitName}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  formSubmitHandler: PropTypes.func.isRequired,
};
