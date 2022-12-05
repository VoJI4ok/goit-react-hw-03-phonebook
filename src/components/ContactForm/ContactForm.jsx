import React from 'react';
import PropTypes from 'prop-types';
import { TheForm, Label, Input, SubmitBtn} from './ContactForm.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.addContact(this.state);
    this.reset();
  };
  inputValueForm = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <TheForm onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            onChange={this.inputValueForm}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </Label>

        <Label htmlFor="number">
          Number
          <Input
            onChange={this.inputValueForm}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </Label>

        <SubmitBtn type="submit">Add Contact</SubmitBtn>
      </TheForm>
    );
  }
}
export default ContactForm;
ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};