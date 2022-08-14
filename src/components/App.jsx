import ContactForm from './ContactForm/ContactForm';
import Contactlist from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2>Contacts</h2>
      <Contactlist />
    </>
  );
}

export default App;
