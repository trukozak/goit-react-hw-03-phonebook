import React, { Component } from 'react';

import AdvForm from './Admin/AdvForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNewContact = contact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, contact],
    }));
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <AdvForm onSubmit={this.addNewContact} contacts={contacts} />
        </Section>
        <Section title="Contacts">
          <Filter filter={filter} onHandleChange={this.onHandleChange} />
          <ContactsList
            contacts={contacts}
            filter={filter}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
