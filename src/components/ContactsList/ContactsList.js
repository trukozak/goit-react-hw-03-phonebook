import React from 'react';
import ContactsListItem from './ContactsListItem/ContactsListItem';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()),
        )
        .map(contact => (
          <ContactsListItem
            key={contact.id}
            {...contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactsList;
