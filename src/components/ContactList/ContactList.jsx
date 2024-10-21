import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContact } from "../../redux/contacts/selectors";

function ContactList() {
  const filterContacts = useSelector(selectFilteredContact);

  return (
    <ul className={css.contactList}>
      {filterContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact}></Contact>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
