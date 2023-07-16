import { List, ListEl, ListBtn } from './ContactList.styled';

export const ContactList = ({ onClick, contacts, filter }) => {
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filterName.map(contact => (
        <ListEl key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <ListBtn type="button" onClick={() => onClick(contact.id)}>
            Delete
          </ListBtn>
        </ListEl>
      ))}
    </List>
  );
};
