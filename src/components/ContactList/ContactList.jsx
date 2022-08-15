import s from'./ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { useGetContactsQuery } from '../../redux/contactsSlice';

const Contactlist = () => {
  const { data } = useGetContactsQuery()
  // const getVisiblecontacts = () => {
  //   const normalizedFilter = value.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = getVisiblecontacts();

  return (
    <ul className={s.list}>
      {data&&data.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          name={name}
          number={phone}
          onDeleteContact={() => null}
        />
      ))}
    </ul>
  );
};

export default Contactlist;
