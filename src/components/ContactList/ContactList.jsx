import s from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';
import { getFilterValue } from '../../redux/filterSlice';

const Contactlist = () => {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const value = useSelector(getFilterValue);

  const getVisiblecontacts = () => {
    const normalizedFilter = value.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisiblecontacts();

  return (
    <ul className={s.list}>
      {visibleContacts?.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          name={name}
          number={phone}
          onDeleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default Contactlist;
